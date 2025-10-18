import InquiryFormHeader from "../../features/inquiries/components/new-inquiry/InquiryFormHeader.tsx";
import InquiryForm from "../../features/inquiries/components/new-inquiry/InquiryForm.tsx";

const NewInquiry = () => {
  return (
    <section className="sm:w-full  md:w-[800px]  mx-auto  md:py-[30px] flex flex-col gap-6 md:px-0 sm:px-4">
      <InquiryFormHeader />
      <InquiryForm />
    </section>
  );
};

export default NewInquiry;
