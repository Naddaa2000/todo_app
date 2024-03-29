export const successResponse = (
  res: any,
  message: string,
  result: any,
  statusCode: number = 200,
) => {
  res.status(statusCode).json({
    status: 'success',
    error: null,
    message,
    result,
  });
};
