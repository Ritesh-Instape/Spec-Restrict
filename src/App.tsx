import { Col, Input } from "rsuite";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  const handleChange = (e: string) => {
    const filteredValue = e.replace(/[^a-zA-Z0-9 ]/g, "");
    setTitle(filteredValue);
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} style={{ marginTop: "30px" }}>
        <Input
          id={title}
          value={title}
          onChange={handleChange}
          placeholder="Enter text code"
        />
      </Col>
    </>
  );
}

export default App;
