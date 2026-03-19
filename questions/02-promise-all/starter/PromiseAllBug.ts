type User = { id: string; name: string };
type Permission = { key: string; enabled: boolean };
type FeatureFlag = { name: string; on: boolean };

type DashboardData = {
  users: User[];
  permissions: Permission[];
  featureFlags: FeatureFlag[];
};

async function fetchUsers(): Promise<User[]> {
  return [{ id: "u1", name: "Ari" }];
}

async function fetchPermissions(): Promise<Permission[]> {
  throw new Error("permissions timeout");
}

async function fetchFeatureFlags(): Promise<FeatureFlag[]> {
  return [{ name: "new-nav", on: true }];
}

export async function loadDashboardData(): Promise<DashboardData> {
  const [users, permissions, featureFlags] = await Promise.all([
    fetchUsers(),
    fetchPermissions(),
    fetchFeatureFlags(),
  ]);

  return { users, permissions, featureFlags };
}
