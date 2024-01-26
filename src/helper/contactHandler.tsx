import { details } from "@/constant/global";

export const handleDownload = () => {
    const link = document.createElement("a");
    link.href = details.CV_URL;
    link.download = "Harikesh_Singh.pdf";

    // Append the anchor to the document
    document.body.appendChild(link);

    // Trigger a click on the anchor to initiate the download
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
  };

  export const handleCollaborate = () => {
    const emailAddress = details.email;
    const subject = details.subject;
    const body = details.body;

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
  };