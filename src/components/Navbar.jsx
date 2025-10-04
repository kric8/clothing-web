import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { Segmented, ConfigProvider } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveSegment = () => {
    if (location.pathname === "/shop") return "SHOP";
    return "HCX";
  };

  const [selectedValue, setSelectedValue] = React.useState(getActiveSegment());

  const handleSegmentChange = (value) => {
    setSelectedValue(value);
    navigate(value === "HCX" ? "/" : "/shop");
  };

  React.useEffect(() => {
    setSelectedValue(getActiveSegment());
  }, [location.pathname]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "black", // Черный цвет активной кнопки
            itemColor: "#000", // Цвет текста
            itemHoverColor: "#000", // Цвет текста при наведении
            itemSelectedColor: "#fff", // Цвет текста активной кнопки
          },
        },
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <Segmented
          value={selectedValue}
          onChange={handleSegmentChange}
          options={["HCX", "SHOP"]}
          style={{ marginBottom: 0 }}
        />
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
