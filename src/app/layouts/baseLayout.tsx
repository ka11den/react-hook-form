import { Layout } from "@/shared/ui";
import { LayoutHeader } from "@/widgets/LayoutHeader/ui/LayoutHeader/LayoutHeader";

export const baseLayout = (
  <Layout 
    footer={
      <h1>footer</h1>
    }
    header={
      <LayoutHeader/>
    }
  />
)