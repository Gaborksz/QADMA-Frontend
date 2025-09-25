 
 export const normalize = (val: string | null | undefined) =>
  val?.trim().toLowerCase() ?? '';