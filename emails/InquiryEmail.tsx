import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from '@react-email/components';
  
  interface InquiryEmailProps {
    email: string;
  }
  
  export default function InquiryEmail({ email }: InquiryEmailProps) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Inquiry Email:</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
      
        <Section>
          <Row>
            <Heading as="h2">Hello {email},</Heading>
          </Row>
          <Row>
            <Text>
              Thank you for submitting form. 
            </Text>
          </Row>
        </Section>
      </Html>
    );
  }