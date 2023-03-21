export function LanguagesList() {
  return (
    <div className="feature-column">
      <span className="feature-icon icon-globe large color-theme mb-20"></span>
      <div className="feature-text">
        <h4>Languages</h4>
        <table style={{ width: "100%" }}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th style={{ width: "28%" }}>Document</th>
              <th style={{ width: "22%" }}></th>
              <th style={{ width: "50%" }}>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
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
              <td>Portuguese - Brazil</td>
            </tr>
            <tr>
              <td>Spanish</td>
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
              <td>Portuguese - Brazil</td>
            </tr>
            <tr>
              <td>French</td>
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
              <td>Portuguese - Brazil</td>
            </tr>
            <tr>
              <td>German</td>
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
              <td>Portuguese - Brazil</td>
            </tr>
            <tr>
              <td>Portuguese</td>
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
              <td>English</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
