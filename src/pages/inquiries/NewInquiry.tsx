import InquiryFormHeader from "../../features/inquiries/components/new-inquiry/InquiryFormHeader.tsx";
import InquiryForm from "../../features/inquiries/components/new-inquiry/InquiryForm.tsx";

const NewInquiry = () => {
  return (
    <section className="sm:w-full  md:w-[800px]  mx-auto  md:py-[30px] flex flex-col gap-6">
      <InquiryFormHeader />
      <InquiryForm />
    </section>
  );
};

export default NewInquiry;
