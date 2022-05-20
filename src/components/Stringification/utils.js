export function safeJsonStringify(json) {
  try {
    const stringed = JSON.stringify(json);
    if (stringed === undefined) return "undefined";
    return stringed;
  } catch (error) {
    return "JSON parse error";
  }
}
export function safeJsonParse(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return "JSON parse error";
  }
}

export const toStringed = (item) => {
  try {
    const stringed = item.toString();
    if (stringed === "") return '""';
    if (Array.isArray(item)) return `"${stringed}"`;
    return stringed;
  } catch (error) {
    return "Non-existent";
  }
};

export function boolIcon(bool) {
  try {
    if (bool === true)
      return (
        <div className="bool-box">
          <span className="check">&#10003;</span>
        </div>
      ); // &#10003; &#9989;
    if (bool === false)
      return (
        <div className="bool-box">
          <span className="cross">&#10005;</span>
        </div>
      ); // &#10005; &#10007; &#10060;
    return "?";
  } catch (error) {
    return "?";
  }
}
