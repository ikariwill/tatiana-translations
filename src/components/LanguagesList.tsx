import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";

export function LanguagesList() {
  const { data } = useContext(CommonContext);

  return (
    <div className="feature-column">
      <span className="feature-icon icon-globe large color-theme mb-20"></span>
      <div className="feature-text">
        <h4>{data?.common.languages}</h4>
        <table style={{ width: "100%" }}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th style={{ width: "28%" }}>{data?.common.document}</th>
              <th style={{ width: "22%" }}></th>
              <th style={{ width: "50%" }}>{data?.common.translation}</th>
            </tr>
          </thead>
          <tbody>
            {data?.languageLists.map((item) => (
              <tr key={item.id}>
                <td>{item.fromLanguage}</td>
                <td>
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                    }}
                  />
                  →
                </td>
                <td>{item.toLanguage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
