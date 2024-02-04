import { autocomplete } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";

export function Autocomplete(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render },
      ...props,
    });

    return () => {
      search.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.plugins]);

  return <div ref={containerRef} />;
}
