import { styled } from "next-yak";
import { ClientComponent } from "./client";

const Headline = styled.h1`
  color: orange;
`;

export default function Page() {
  return (
    <>
      <Headline>Hello</Headline>
      <ClientComponent />
    </>
  );
}
