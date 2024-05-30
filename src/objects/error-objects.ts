interface ApiErrorProps {
  message: string;
  statusCode: number;
  name?: string;
}

export class ApiError extends Error {
  statusCode: number;

  constructor({ message, statusCode, name = 'Error' }: ApiErrorProps) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}
