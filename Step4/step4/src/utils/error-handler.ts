import { refreshToken } from "@api/auth.refreshToken";
import { IErrorResponse } from "interfaces/request.interface";
import { AxiosError } from "axios";
import { Mutation, Query, QueryKey } from "@tanstack/react-query";
import {
  setAccessToken,
  removeAccessToken,
  setRefreshToken,
  removeRefreshToken,
  getRefreshToken,
} from "./token";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

let isRedirecting = false;
let isRefreshing = false;
let failedQueue: {
  query?: Query<unknown, unknown, unknown, QueryKey>;
  mutation?: Mutation<unknown, unknown, unknown, unknown>;
  variables?: unknown;
}[] = [];

const errorHandler = (
  error: unknown,
  query?: Query<unknown, unknown, unknown, QueryKey>,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
  variables?: unknown
) => {
  const axiosError = error as AxiosError<IErrorResponse>;
  if (axiosError?.response?.status === 401) {
    if (mutation) refreshTokenAndRetry(undefined, mutation, variables);
    else refreshTokenAndRetry(query);
  } else if (axiosError?.response) {
    console.error(axiosError.response.data?.message);
  } else if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error occurred");
  }
};

export const queryErrorHandler = (
  error: unknown,
  query: Query<unknown, unknown, unknown, QueryKey>
) => {
  errorHandler(error, query);
};

export const mutationErrorHandler = (
  error: unknown,
  variables: unknown,
  mutation: Mutation<unknown, unknown, unknown, unknown>
) => {
  errorHandler(error, undefined, mutation, variables);
};

const proceesFailedQueue = () => {
  failedQueue.forEach(({ query, mutation, variables }) => {
    if (mutation) {
      const { options } = mutation;
      mutation.setOptions({ ...options });
      mutation.execute(variables);
    }
    if (query) query.fetch();
  });
  isRefreshing = false;
  failedQueue = [];
};

const refreshTokenAndRetry = async (
  query?: Query<unknown, unknown, unknown, QueryKey>,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
  variables?: unknown
) => {
  try {
    if (!isRefreshing) {
      isRefreshing = true;
      failedQueue.push({ query, mutation, variables });
      const refreshTokenValue = getRefreshToken();
      if (refreshTokenValue) {
        const { access_token, refresh_token: newRefreshToken } =
          await refreshToken(refreshTokenValue);
        setAccessToken(access_token);
        setRefreshToken(newRefreshToken);
        proceesFailedQueue();
      }
    } else {
      failedQueue.push({ query, variables, mutation });
    }
  } catch (error) {
    removeAccessToken();
    removeRefreshToken();
    if (!isRedirecting) {
      isRedirecting = true;
      navigate("/");
    }
  }
};
