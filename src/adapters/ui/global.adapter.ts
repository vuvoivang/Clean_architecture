import { selectCountLoading } from "../redux/global/global.selector";
import { useAppSelector } from "../redux/hooks";

export const useCountLoading = () => {
  const token = useAppSelector(selectCountLoading);
  return token;
};
