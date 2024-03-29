export const errorResponse = (
  res: any,
  error: Error | string | unknown,
  statusCode: number = 500,
) => {
  res.status(statusCode).json({
    status: 'fail',
    error: typeof error !== 'string' ? error : null,
    message: typeof error !== 'string' ? (error as Error).message : error,
    result: null,
  });
};
