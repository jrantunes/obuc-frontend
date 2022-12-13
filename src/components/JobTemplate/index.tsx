import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { Job } from "contexts/types";

import logoImg from "assets/images/logo.png";

import { styles } from "./styles";

type JobTemplateProps = {
  job: Job;
};

const formatCurrency = (value: number) => {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};

const JobTemplate = ({ job }: JobTemplateProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImg} style={styles.image} />
          <View style={styles.title}>
            <Text>Vaga: {job.name}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Salário: </Text>
          <Text style={styles.sectionValue}>
            {formatCurrency(Number(job.salary))}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atividades: </Text>
          <View style={styles.list}>
            {job.activities.split(",").map((activity, index) => (
              <Text key={index} style={styles.listItem}>
                - {activity}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios: </Text>
          <View style={styles.list}>
            {job.benefits.split(",").map((benefit, index) => (
              <Text key={index} style={styles.listItem}>
                - {benefit}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Etapas: </Text>
          <View style={styles.list}>
            {job.steps.split(",").map((step, index) => (
              <Text key={index} style={styles.listItem}>
                - {step}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades: </Text>
          <View style={styles.list}>
            {job.skills.split(",").map((skill, index) => (
              <Text key={index} style={styles.listItem}>
                - {skill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiências: </Text>
          <View style={styles.list}>
            {job.experiences.split(",").map((experience, index) => (
              <Text key={index} style={styles.listItem}>
                - {experience}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default JobTemplate;
