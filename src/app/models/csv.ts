const csvAPIVersion = 'operators.coreos.com/v1alpha1';
const csvKind = 'ClusterServiceVersion';

interface ObjectMeta {
  metadata: {
    name: string;
    generateName?: string;
    namespace?: string;
    labels?: { [key: string]: string };
    annotations?: { [key: string]: string };
  };
}

interface TypeMeta {
  kind: string;
  apiVersion: string;
}

export interface ClusterServiceVersion extends ObjectMeta, TypeMeta {
  spec: ClusterServiceVersionSpec;
}

interface ClusterServiceVersionSpec {
  install: NamedInstallStrategy;
  version: string;
  maturity: string;
  customresourcedefinitions: CustomResourceDefinitions;
  apiservicedefinitions?: APIServiceDefinitions;
  nativeAPIs?: GroupVersionKind[];
  minKubeVersion?: string;
  displayName: string;
  description: string;
  keywords: string[];
  maintainers: Maintainer[];
  provider: AppLink;
  links: AppLink[];
  icon: Icon[];
  installModes?: InstallMode[];
  replaces?: string;
  labels?: { [key: string]: string };
  annotations?: { [key: string]: string };
  selector?: LabelSelector;
}

interface NamedInstallStrategy {
  strategy: string;
  spec: StrategyDetailsDeployment;
}

interface StrategyDetailsDeployment {
  deployments: StrategyDeploymentSpec[];
  permissions?: StrategyDeploymentPermissions[];
  clusterPermissions?: StrategyDeploymentPermissions[];
}

interface StrategyDeploymentPermissions {
  serviceAccountName: string;
  rules: PolicyRule[];
}

interface PolicyRule {
  verbs: string[];
  apiGroups?: string[];
  resources?: string[];
  resourceNames?: string[];
  nonResourceURLS?: string;
}

interface StrategyDeploymentSpec {
  name: string;
  spec: DeploymentSpec;
}

interface DeploymentSpec {
  replicas: number;
  selector: LabelSelector;
  template: PodTemplateSpec;
}

interface PodTemplateSpec extends ObjectMeta {
  spec: any;
}

interface OperatorVersion {
  major: number;
  minor: number;
  patch: number;
  pre: PRVersion;
  build: string;
}

interface PRVersion {
  versionStr: string;
  versionNum: number;
  isNum: boolean;
}

interface CustomResourceDefinitions {
  owned: CRDDescription[];
  required?: CRDDescription[];
}

interface CRDDescription {
  name: string;
  group?: string;
  version: string;
  kind: string;
  displayName: string;
  description: string;
  resources: APIResourceReference[];
  statusDescriptors?: StatusDescriptor[];
  specDescriptors: SpecDescriptor[];
  actionDescriptor?: ActionDescriptor[];
}

interface APIResourceReference {
  name?: string;
  kind: string;
  version: string;
}

interface StatusDescriptor {
  path: string;
  displayName: string;
  description: string;
  'x-descriptors': string[];
  value: any;
}

interface SpecDescriptor {
  path: string;
  displayName: string;
  description: string;
  'x-descriptors': string[];
  value?: any;
}

interface ActionDescriptor {
  path: string;
  displayName: string;
  description: string;
  'x-descriptors': string[];
  value: any;
}

interface APIServiceDescription {
  name: string;
  group: string;
  version: string;
  kind: string;
  deploymentName: string;
  containerPort: number;
  description: string;
  resources: APIResourceReference[];
  statusDescriptors: StatusDescriptor[];
  specDescriptors: SpecDescriptor[];
  actionDescriptor: ActionDescriptor[];
}

interface APIServiceDefinitions {
  owned: APIServiceDescription[];
  required?: APIServiceDescription[];
}

interface GroupVersionKind {
  group: string;
  version: string;
  kind: string;
}

interface Maintainer {
  name: string;
  email: string;
}

export interface AppLink {
  name: string;
  url?: string;
}

export interface Icon {
  base64data: string;
  mediatype: string;
}

enum InstallModeType {
  OwnNamespace = 'OwnNamespace',
  SingleNamespace = 'SingleNamespace',
  MultiNamespace = 'MultiNamespace',
  AllNamespaces = 'AllNamespaces'
}

interface InstallMode {
  type: string;
  supported: boolean;
}

interface LabelSelector {
  matchLabels?: { [key: string]: string };
  matchExpressions?: LabelSelectorRequirement[];
}

enum LabelSelectorOperator {
  In = 'In',
  NotIn = 'NotIn',
  Exists = 'Exists',
  DoesNotExist = 'DoestNotExist'
}

interface LabelSelectorRequirement {
  key: string;
  operator: LabelSelectorOperator;
  values?: string[];
}

export function checkClusterServiceVersion(
  csv: ClusterServiceVersion
): boolean {
  if (csv.apiVersion !== csvAPIVersion) {
    return false;
  } else if (csv.kind !== csvKind) {
    return false;
  }

  return true;
}
