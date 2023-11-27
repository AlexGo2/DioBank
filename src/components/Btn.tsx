import { Button } from "@chakra-ui/react";

interface TypeButton {
  name: string;
  type: "button" | "reset" | "submit";
  onclick?: () => {};
}

const Btn = ({ name, onclick, type }: TypeButton) => {
  return (
    <>
      <Button
        size="md"
        width="100%"
        marginTop="15px"
        colorScheme="purple"
        onClick={onclick}
        type={type}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;
