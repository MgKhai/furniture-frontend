import { useNavigation } from "react-router";
import { useIsFetching } from "@tanstack/react-query";

export default function ProgressBar() {
  const navigation = useNavigation();
  const isFetching = useIsFetching() > 0;

  if (isFetching || navigation.state != "idle") {
    return (
      <div className="fixed top-0 left-0 z-50 h-0.5 w-full overflow-hidden bg-gray-200">
        <div className="animate-progress absolute h-full w-2/3 bg-green-400"></div>
      </div>
    );
  }

  return null;
}
