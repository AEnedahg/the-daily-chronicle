import axios from "axios";
import { headlinesSchema } from "../schema/headlinesSchema";

const fetchFromProxy = async (category?: string) => {
  try {
    const response = await axios.get("/api/news", {
      params: category ? { category } : {},
    });

    const parsed = headlinesSchema.parse(response.data);
    return parsed;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};

export const fetchHeadlines = () => fetchFromProxy();

export const fetchBusinessHeadlines = () => fetchFromProxy("business");

export const fetchEntertainmentHeadlines = () => fetchFromProxy("entertainment");

export const fetchSportsHeadlines = () => fetchFromProxy("sports");

export const fetchTechnologyHeadlines = () => fetchFromProxy("technology");

export const fetchGeneralHeadlines = () => fetchFromProxy("general");

export const fetchHealthHeadlines = () => fetchFromProxy("health");

export const fetchScienceHeadlines = () => fetchFromProxy("science");
