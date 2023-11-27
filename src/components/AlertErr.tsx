import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface TypeAlert {
  title: string;
  description: string;
}

function AlertErr({ title, description }: TypeAlert) {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </>
  );
}

export default AlertErr;
