import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";

export function Areas() {
  const { data } = useContext(CommonContext);

  return (
    <div className="feature-column">
      <span className="feature-icon icon-open-book large color-theme mb-20"></span>
      <div className="feature-text">
        <h4>{data?.area.title}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.area.content.html as string,
          }}
        ></div>
      </div>
    </div>
  );
}
