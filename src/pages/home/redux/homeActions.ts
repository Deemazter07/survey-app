import * as homeSlice from "./homeSlice";
import { AppThunk } from "../../../redux/store";

export const answerQuetion =
  (response: homeSlice.SurveyResponse): AppThunk<void> =>
  async (dispatch) => {
    try {
      dispatch(homeSlice.answerQuestion(response));
    } catch (error) {
      console.log("error", error);
    }
  };

export const updatePageQuestion = (): AppThunk<void> => async (dispatch) => {
  try {
    dispatch(homeSlice.nextQuestion());
  } catch (error) {
    console.log("error", error);
  }
};

export const updateTimer =
  (timer: number): AppThunk<void> =>
  async (dispatch) => {
    try {
      dispatch(homeSlice.updateTimer(timer));
    } catch (error) {
      console.log("error", error);
    }
  };

export const resetSurvey = (): AppThunk<void> => async (dispatch) => {
  try {
    dispatch(homeSlice.resetSurvey());
  } catch (error) {
    console.log("error", error);
  }
};
