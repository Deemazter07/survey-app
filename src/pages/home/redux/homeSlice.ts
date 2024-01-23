import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIMER_MILLISECOND } from "../../../constants";

export interface SurveyResponse {
  questionIndex: number;
  answerIndex: number;
}

export interface SurveyState {
  currentQuestionIndex: number;
  surveyResponses: SurveyResponse[];
  timer: number;
}

const initialState: SurveyState = {
  currentQuestionIndex: -1,
  surveyResponses: [],
  timer: TIMER_MILLISECOND,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<SurveyResponse>) => {
      const response = action.payload;
      const currentResponse = [...state.surveyResponses];
      currentResponse.push(response);

      state.currentQuestionIndex++;
      state.surveyResponses = currentResponse;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    updateTimer: (state, action) => {
      const timer = action.payload;
      state.timer = timer;
    },
    resetSurvey: (state) => {
      state.currentQuestionIndex = -1;
      state.surveyResponses = [];
      state.timer = TIMER_MILLISECOND;
    },
  },
});

export const { answerQuestion, nextQuestion, updateTimer, resetSurvey } =
  homeSlice.actions;

export default homeSlice.reducer;
