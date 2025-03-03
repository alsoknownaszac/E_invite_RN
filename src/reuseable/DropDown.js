import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import PropTypes from "prop-types";

export const DropdownMenu = ({
  visible,
  handleOpen,
  handleClose,
  trigger,
  children,
  dropdownWidth,
}) => {
  const triggerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0 });

  useEffect(() => {
    if (triggerRef.current && visible) {
      triggerRef.current.measure((fx, fy, width, height, px, py) => {
        setPosition({
          x: px,
          y: py + height,
          width: width,
        });
      });
    }
  }, [visible]);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={handleOpen}
        accessibilityLabel="Open Dropdown"
      >
        <View ref={triggerRef}>{trigger}</View>
      </TouchableWithoutFeedback>
      {visible && (
        <Modal
          transparent={true}
          visible={visible}
          animationType="fade"
          onRequestClose={handleClose}
        >
          <TouchableWithoutFeedback
            onPress={handleClose}
            accessibilityLabel="Close Dropdown"
          >
            <View style={styles.modalOverlay}>
              <View
                className="200"
                style={[
                  styles.menu,
                  {
                    top: position.y + 2,
                    left: position.x,
                    width: dropdownWidth || position.width,
                    gap: 8,
                  },
                ]}
              >
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

DropdownMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  dropdownWidth: PropTypes.number,
};

export const MenuOption = ({ dropdownWidth, onSelect, children }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.menuOption, { width: dropdownWidth }]}
      accessibilityLabel="Menu Option"
      className="bg-[#DAD8D8]/5 border border-[#DAD8D8]/10"
    >
      {children}
    </TouchableOpacity>
  );
};

MenuOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 4,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuOption: {
    padding: 3,
  },
});
