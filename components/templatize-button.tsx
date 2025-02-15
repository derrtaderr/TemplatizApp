import { Button } from "./button";
import { IconTemplate } from "@tabler/icons-react";

export const TemplatizeButton = () => {
  return (
    <Button variant="templatize">
      <IconTemplate className="w-4 h-4 mr-2" />
      Save & Templatize
    </Button>
  );
}; 