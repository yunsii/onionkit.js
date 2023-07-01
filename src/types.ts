export interface CodingResponse<
  T extends Record<string, any> | undefined = undefined,
> {
  Response: T extends undefined
    ? {
        RequestId: string
      }
    : T & {
        RequestId: string
      }
}

export interface CodingResponseError
  extends CodingResponse<{
    Error: {
      Message: string
      Code: 'MissingParameter' | 'InvalidParameterValue' | string
    }
  }> {}
