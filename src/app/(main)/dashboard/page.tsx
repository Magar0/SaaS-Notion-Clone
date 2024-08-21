import DashboardSetup from "@/components/dashboard-setup/dashboard-setup";
import db from "@/lib/supabase/db";
import { getUserSubscriptionStatus } from "@/lib/supabase/queries";
import { workspaces } from "@/lib/supabase/schema";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.workspaceOwner, user.id),
  });

  console.log("subscription");
  const { data: subscription, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);

  if (subscriptionError) return;

  console.log(subscription);

  // if (!workspace)
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <DashboardSetup user={user} subscription={subscription}></DashboardSetup>
    </div>
  );

  // redirect(`/dashboard/${workspace.id}`);
  // return <h1>dsfvfvgfd</h1>;
};

export default DashboardPage;
