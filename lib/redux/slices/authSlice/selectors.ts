import { ReduxState } from '../../store';

export const selectUser = (state: ReduxState) => state.auth.user;
