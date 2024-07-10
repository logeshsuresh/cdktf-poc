import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { ProjectIamMember } from "@cdktf/provider-google/lib/project-iam-member";
import { CREDENTIALS_PATH, GOOGLE_PROJECT_ID, GOOGLE_REGION } from "./config";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const credentialsPath = CREDENTIALS_PATH;
    const region = GOOGLE_REGION;
    const projectId = GOOGLE_PROJECT_ID; 

    new GoogleProvider(this, "GoogleAuth", {
      region: region,
      zone: region + "-c",
      project: projectId,
      credentials: credentialsPath,
    });

    new ProjectIamMember(this, "EditorRoleBinding", {
      member: "user:logeshsrinivasans@gmail.com",
      project: projectId,
      role: "roles/editor",
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-poc");
app.synth();
