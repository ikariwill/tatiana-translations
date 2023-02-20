export default function Translations() {
  return (
    <div className="section-block replicable-content">
      <div className="row flex">
        <div className="column width-6">
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
        </div>
        <div className="column width-4">
          <div className="feature-column">
            <span className="feature-icon icon-open-book large color-theme mb-20"></span>
            <div className="feature-text">
              <h4>Areas</h4>
              <ul>
                <li>Pharmaceutical Sciences & Pharmaceutical Industry</li>
                <li>Medicine, Nutrition & Health</li>
                <li>Academic Research</li>
                <li>Training & Education</li>
                <li>Sport & Fitness</li>
                <li>Marketing & Communication</li>
                <li>Games</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
