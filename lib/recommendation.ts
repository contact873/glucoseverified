export function getRecommendation(diabetesType: string): string {
  if (diabetesType === "Type 2") {
    return "Berberine and Alpha Lipoic Acid are commonly studied for Type 2 diabetes support.";
  }
  if (diabetesType === "Prediabetes") {
    return "Chromium and Cinnamon extract have been studied for prediabetes management.";
  }
  return "Consult your healthcare provider for personalized supplement recommendations.";
}