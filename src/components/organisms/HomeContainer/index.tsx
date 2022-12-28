import { PresentationContainer } from "../../molecules/PresentationContainer";
import { TopNavBar } from "../../molecules/TopNavBar";

export function HomeContainer() {
  const pages = ['About', 'Experience', 'Projects'];

  return (
    <>
      <TopNavBar items={pages} />
      <PresentationContainer />
    </>
  );
}