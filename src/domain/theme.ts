import { useEffect, useState } from "react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.100", "gray.600")(props),
      },
    }),
  },
});
