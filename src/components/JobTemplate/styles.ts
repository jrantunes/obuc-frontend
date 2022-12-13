import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px"
  },
  sectionTitle: {
    fontSize: "20px",
    width: "100%",
    fontWeight: "bold",
    padding: "8px 0 8px 0",
    backgroundColor: "#F2F2F2",
    color: "#8F8F8F"
  },
  sectionValue: {
    fontSize: "16px",
    width: "100%",
    fontWeight: "bold",
    color: "#e55175",
    marginTop: "14px"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    width: "100%",
    height: "30px",
    fontWeight: "bold",
    color: "#5ce1e6"
  },
  image: {
    width: "150px",
    height: "auto",
    paddingBottom: "15px"
  },
  list: {
    width: "100%",
    marginTop: "14px",
    padding: "0 0 0 24px"
  },
  listItem: {
    color: "#e55175",
    fontSize: "16px"
  }
});
