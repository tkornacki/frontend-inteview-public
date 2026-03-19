export type QuestionId = "1" | "2" | "3";

export function getQuestionFromSearch(search: string): QuestionId {
  const params = new URLSearchParams(search);
  const value = params.get("q");

  return value === "1" || value === "2" || value === "3" ? value : "1";
}
