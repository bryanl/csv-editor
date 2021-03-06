// tslint:disable

import { ClusterServiceVersion } from './csv';

export const defaultCSV: ClusterServiceVersion = {
  apiVersion: 'operators.coreos.com/v1alpha1',
  kind: 'ClusterServiceVersion',
  metadata: {
    name: 'kiali-operator.v1.13.0',
    namespace: 'placeholder',
    annotations: {
      categories: 'Monitoring,Logging & Tracing',
      certified: 'false',
      containerImage: 'quay.io/kiali/kiali-operator:v1.13.0',
      capabilities: 'Deep Insights',
      support: 'Kiali',
      description:
        'Kiali project provides answers to the questions: What microservices are part of my Istio service mesh and how are they connected?',
      repository: 'https://github.com/kiali/kiali',
      createdAt: '2020-01-21T12:39:22.000Z',
      'alm-examples':
        '[\n  {\n    "apiVersion": "kiali.io/v1alpha1",\n    "kind": "Kiali",\n    "metadata": {\n      "name": "kiali"\n    },\n    "spec": {\n      "installation_tag": "My Kiali",\n      "istio_namespace": "istio-system",\n      "deployment": {\n        "namespace": "istio-system",\n        "verbose_mode": "4",\n        "view_only_mode": false\n      },\n      "external_services": {\n        "grafana": {\n          "url": ""\n        },\n        "prometheus": {\n          "url": ""\n        },\n        "tracing": {\n          "url": ""\n        }\n      },\n      "server": {\n        "web_root": "/mykiali"\n      }\n    }\n  },\n  {\n    "apiVersion": "monitoring.kiali.io/v1alpha1",\n    "kind": "MonitoringDashboard",\n    "metadata": {\n      "name": "myappdashboard"\n    },\n    "spec": {\n      "title": "My App Dashboard",\n      "items": [\n        {\n          "chart": {\n            "name": "My App Processing Duration",\n            "unit": "seconds",\n            "spans": 6,\n            "metricName": "my_app_duration_seconds",\n            "dataType": "histogram",\n            "aggregations": [\n              {\n                "label": "id",\n                "displayName": "ID"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n]'
    }
  },
  spec: {
    version: '1.13.0',
    maturity: 'stable',
    replaces: 'kiali-operator.v1.11.0',
    displayName: 'Kiali Operator',
    description:
      "## About the managed application\n\nA Microservice Architecture breaks up the monolith into many smaller pieces\nthat are composed together. Patterns to secure the communication between\nservices like fault tolerance (via timeout, retry, circuit breaking, etc.)\nhave come up as well as distributed tracing to be able to see where calls\nare going.\n\nA service mesh can now provide these services on a platform level and frees\nthe application writers from those tasks. Routing decisions are done at the\nmesh level.\n\nKiali works with Istio, in OpenShift or Kubernetes, to visualize the service\nmesh topology, to provide visibility into features like circuit breakers,\nrequest rates and more. It offers insights about the mesh components at\ndifferent levels, from abstract Applications to Services and Workloads.\n\nSee [https://www.kiali.io](https://www.kiali.io) to read more.\n\n### Accessing the UI\n\nBy default, the Kiali operator exposes the Kiali UI as a Route on OpenShift\nor Ingress on Kubernetes.\n\nOn OpenShift, the default root context path is '/' and on Kubernetes it is\n'/kiali' though you can change this by configuring the 'web_root' setting in\nthe Kiali CR.\n\n## About this Operator\n\n### Kiali Custom Resource Configuration Settings\n\nFor quick descriptions of all the settings you can configure in the Kiali\nCustom Resource (CR), see the file\n[kiali_cr.yaml](https://github.com/kiali/kiali/blob/v1.13.0/operator/deploy/kiali/kiali_cr.yaml)\n\nNote that the Kiali operator can be told to restrict Kiali's access to\nspecific namespaces, or can provide to Kiali cluster-wide access to all\nnamespaces.\n\n## Prerequisites for enabling this Operator\n\nToday Kiali works with Istio. So before you install Kiali, you must have\nalready installed Istio. Note that Istio can come pre-bundled with Kiali\n(specifically if you installed the Istio demo helm profile or if you\ninstalled Istio with the helm option '--set kiali.enabled=true'). If you\nalready have the pre-bundled Kiali in your Istio environment and you want to\ninstall Kiali via the Kiali Operator, uninstall the pre-bundled Kiali first.\nYou can do this via this command,\n\n    kubectl delete --ignore-not-found=true all,secrets,sa,templates,configmaps,deployments,clusterroles,clusterrolebindings,ingresses,customresourcedefinitions --selector=\"app=kiali\" -n istio-system\n\nWhen you install Kiali in a non-OpenShift Kubernetes environment, the\nauthentication strategy will default to `login`. When using the\nauthentication strategy of `login`, you are required to create a Kubernetes\nSecret with a `username` and `passphrase` that you want users to provide in\norder to successfully log into Kiali. Here is an example command you can\nexecute to create such a secret (with a username of `admin` and a passphrase\nof `admin`),\n\n    kubectl create secret generic kiali -n istio-system --from-literal \"username=admin\" --from-literal \"passphrase=admin\"\n\nIf you wish to use the \"ldap\" authentication strategy, you must have an LDAP\nserver available and accessible to Kiali.",
    icon: [
      {
        base64data:
          'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDEyODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyODAgMTI4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMTMxNDQ7fQoJLnN0MXtmaWxsOiMwMDkzREQ7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MTAuOSwxODAuOWMtMjUzLjYsMC00NTkuMSwyMDUuNS00NTkuMSw0NTkuMXMyMDUuNSw0NTkuMSw0NTkuMSw0NTkuMVMxMjcwLDg5My42LDEyNzAsNjQwCgkJUzEwNjQuNSwxODAuOSw4MTAuOSwxODAuOXogTTgxMC45LDEwMjkuMmMtMjE1LDAtMzg5LjItMTc0LjMtMzg5LjItMzg5LjJjMC0yMTUsMTc0LjMtMzg5LjIsMzg5LjItMzg5LjJTMTIwMC4xLDQyNSwxMjAwLjEsNjQwCgkJUzEwMjUuOSwxMDI5LjIsODEwLjksMTAyOS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTY1My4zLDI4NGMtMTM2LjQsNjAuNS0yMzEuNiwxOTcuMS0yMzEuNiwzNTZjMCwxNTguOCw5NS4yLDI5NS41LDIzMS42LDM1NmM5OC40LTg3LjEsMTYwLjQtMjE0LjMsMTYwLjQtMzU2CgkJQzgxMy43LDQ5OC4zLDc1MS42LDM3MS4xLDY1My4zLDI4NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNTEuOCw2NDBjMC0xMDkuOCwzOC42LTIxMC41LDEwMi44LTI4OS41Yy0zOS42LTE4LjItODMuNi0yOC4zLTEzMC0yOC4zQzE1MC45LDMyMi4yLDEwLDQ2NC41LDEwLDY0MAoJCXMxNDAuOSwzMTcuOCwzMTQuNiwzMTcuOGM0Ni4zLDAsOTAuNC0xMC4xLDEzMC0yOC4zQzM5MC4zLDg1MC41LDM1MS44LDc0OS44LDM1MS44LDY0MHoiLz4KPC9nPgo8L3N2Zz4K',
        mediatype: 'image/svg+xml'
      }
    ],
    keywords: [
      'service-mesh',
      'observability',
      'monitoring',
      'maistra',
      'istio'
    ],
    maintainers: [
      {
        name: 'Kiali Developers Google Group',
        email: 'kiali-dev@googlegroups.com'
      }
    ],
    provider: {
      name: 'Kiali'
    },
    labels: {
      name: 'kiali-operator'
    },
    selector: {
      matchLabels: {
        name: 'kiali-operator'
      }
    },
    links: [
      {
        name: 'Getting Started Guide',
        url: 'https://www.kiali.io/documentation/getting-started/'
      },
      {
        name: 'Features',
        url: 'https://www.kiali.io/documentation/features'
      },
      {
        name: 'Documentation Home',
        url: 'https://www.kiali.io/documentation'
      },
      {
        name: 'Blogs and Articles',
        url: 'https://medium.com/kialiproject'
      },
      {
        name: 'Server Source Code',
        url: 'https://github.com/kiali/kiali'
      },
      {
        name: 'UI Source Code',
        url: 'https://github.com/kiali/kiali-ui'
      }
    ],
    installModes: [
      {
        type: 'OwnNamespace',
        supported: true
      },
      {
        type: 'SingleNamespace',
        supported: true
      },
      {
        type: 'MultiNamespace',
        supported: false
      },
      {
        type: 'AllNamespaces',
        supported: true
      }
    ],
    customresourcedefinitions: {
      owned: [
        {
          name: 'kialis.kiali.io',
          group: 'kiali.io',
          description: 'A configuration file for a Kiali installation.',
          displayName: 'Kiali',
          kind: 'Kiali',
          version: 'v1alpha1',
          resources: [
            {
              kind: 'Deployment',
              version: 'apps/v1'
            },
            {
              kind: 'Pod',
              version: 'v1'
            },
            {
              kind: 'Service',
              version: 'v1'
            },
            {
              kind: 'ConfigMap',
              version: 'v1'
            },
            {
              kind: 'OAuthClient',
              version: 'oauth.openshift.io/v1'
            },
            {
              kind: 'Route',
              version: 'route.openshift.io/v1'
            },
            {
              kind: 'Ingress',
              version: 'extensions/v1beta1'
            }
          ],
          specDescriptors: [
            {
              displayName: 'Authentication Strategy',
              description:
                "Determines how a user is to log into Kiali. Choose 'login' to use a username and passphrase as defined in a Secret. Choose 'anonymous' to allow full access to Kiali without requiring credentials (use this at your own risk). Choose 'openshift' if on OpenShift to use the OpenShift OAuth login which controls access based on the individual's OpenShift RBAC roles. Default: openshift (when deployed in OpenShift); login (when deployed in Kubernetes)",
              path: 'auth.strategy',
              'x-descriptors': ['urn:alm:descriptor:com.tectonic.ui:label']
            },
            {
              displayName: 'Kiali Namespace',
              description:
                'The namespace where Kiali and its associated resources will be created. Default: istio-system',
              path: 'deployment.namespace',
              'x-descriptors': ['urn:alm:descriptor:com.tectonic.ui:label']
            },
            {
              displayName: 'Secret Name',
              description:
                "If Kiali is configured with auth.strategy 'login', an admin must create a Secret with credentials ('username' and 'passphrase') which will be used to authenticate users logging into Kiali. This setting defines the name of that secret. Default: kiali",
              path: 'deployment.secret_name',
              'x-descriptors': [
                'urn:alm:descriptor:com.tectonic.ui:selector:core:v1:Secret'
              ]
            },
            {
              displayName: 'Verbose Mode',
              description:
                "Determines the priority levels of log messages Kiali will output. Typical values are '3' for INFO and higher priority messages, '4' for DEBUG and higher priority messages (this makes the logs more noisy). Default: 3",
              path: 'deployment.verbose_mode',
              'x-descriptors': ['urn:alm:descriptor:com.tectonic.ui:label']
            },
            {
              displayName: 'View Only Mode',
              description:
                "When true, Kiali will be in 'view only' mode, allowing the user to view and retrieve management and monitoring data for the service mesh, but not allow the user to modify the service mesh. Default: false",
              path: 'deployment.view_only_mode',
              'x-descriptors': [
                'urn:alm:descriptor:com.tectonic.ui:booleanSwitch'
              ]
            },
            {
              displayName: 'Web Root',
              description:
                'Defines the root context path for the Kiali console, API endpoints and readiness/liveness probes. Default: / (when deployed on OpenShift; /kiali (when deployed on Kubernetes)',
              path: 'server.web_root',
              'x-descriptors': ['urn:alm:descriptor:com.tectonic.ui:label']
            }
          ]
        },
        {
          name: 'monitoringdashboards.monitoring.kiali.io',
          group: 'monitoring.kiali.io',
          description:
            'A configuration file for defining an individual metric dashboard.',
          displayName: 'Monitoring Dashboard',
          kind: 'MonitoringDashboard',
          version: 'v1alpha1',
          resources: [],
          specDescriptors: [
            {
              displayName: 'Title',
              description: 'The title of the dashboard.',
              path: 'title',
              'x-descriptors': ['urn:alm:descriptor:com.tectonic.ui:label']
            }
          ]
        }
      ]
    },
    install: {
      strategy: 'deployment',
      spec: {
        deployments: [
          {
            name: 'kiali-operator',
            spec: {
              replicas: 1,
              selector: {
                matchLabels: {
                  app: 'kiali-operator'
                }
              },
              template: {
                metadata: {
                  name: 'kiali-operator',
                  labels: {
                    app: 'kiali-operator',
                    version: 'v1.13.0'
                  },
                  annotations: {
                    'prometheus.io/scrape': 'true',
                    'prometheus.io/port': '8383'
                  }
                },
                spec: {
                  serviceAccountName: 'kiali-operator',
                  containers: [
                    {
                      name: 'ansible',
                      command: [
                        '/usr/local/bin/ao-logs',
                        '/tmp/ansible-operator/runner',
                        'stdout'
                      ],
                      image: 'quay.io/kiali/kiali-operator:v1.13.0',
                      imagePullPolicy: 'IfNotPresent',
                      volumeMounts: [
                        {
                          mountPath: '/tmp/ansible-operator/runner',
                          name: 'runner',
                          readOnly: true
                        }
                      ]
                    },
                    {
                      name: 'operator',
                      image: 'quay.io/kiali/kiali-operator:v1.13.0',
                      imagePullPolicy: 'IfNotPresent',
                      volumeMounts: [
                        {
                          mountPath: '/tmp/ansible-operator/runner',
                          name: 'runner'
                        }
                      ],
                      env: [
                        {
                          name: 'WATCH_NAMESPACE',
                          valueFrom: {
                            fieldRef: {
                              fieldPath:
                                "metadata.annotations['olm.targetNamespaces']"
                            }
                          }
                        },
                        {
                          name: 'POD_NAME',
                          valueFrom: {
                            fieldRef: {
                              fieldPath: 'metadata.name'
                            }
                          }
                        },
                        {
                          name: 'POD_NAMESPACE',
                          valueFrom: {
                            fieldRef: {
                              fieldPath: 'metadata.namespace'
                            }
                          }
                        },
                        {
                          name: 'OPERATOR_NAME',
                          value: 'kiali-operator'
                        }
                      ]
                    }
                  ],
                  volumes: [
                    {
                      name: 'runner',
                      emptyDir: {}
                    }
                  ]
                }
              }
            }
          }
        ],
        clusterPermissions: [
          {
            rules: [
              {
                apiGroups: [''],
                resources: [
                  'configmaps',
                  'endpoints',
                  'events',
                  'persistentvolumeclaims',
                  'pods',
                  'serviceaccounts',
                  'services'
                ],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: [''],
                resources: ['namespaces'],
                verbs: ['get', 'list', 'patch']
              },
              {
                apiGroups: ['apps'],
                resources: ['deployments', 'replicasets'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['monitoring.coreos.com'],
                resources: ['servicemonitors'],
                verbs: ['create', 'get']
              },
              {
                apiGroups: ['apps'],
                resourceNames: ['kiali-operator'],
                resources: ['deployments/finalizers'],
                verbs: ['update']
              },
              {
                apiGroups: ['kiali.io'],
                resources: ['*'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['rbac.authorization.k8s.io'],
                resources: [
                  'clusterrolebindings',
                  'clusterroles',
                  'rolebindings',
                  'roles'
                ],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['apiextensions.k8s.io'],
                resources: ['customresourcedefinitions'],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: ['extensions'],
                resources: ['ingresses'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['route.openshift.io'],
                resources: ['routes'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['oauth.openshift.io'],
                resources: ['oauthclients'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['config.openshift.io'],
                resources: ['clusteroperators'],
                verbs: ['list', 'watch']
              },
              {
                apiGroups: ['config.openshift.io'],
                resourceNames: ['kube-apiserver'],
                resources: ['clusteroperators'],
                verbs: ['get']
              },
              {
                apiGroups: ['console.openshift.io'],
                resources: ['consolelinks'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: ['monitoring.kiali.io'],
                resources: ['monitoringdashboards'],
                verbs: [
                  'create',
                  'delete',
                  'get',
                  'list',
                  'patch',
                  'update',
                  'watch'
                ]
              },
              {
                apiGroups: [''],
                resources: [
                  'configmaps',
                  'endpoints',
                  'namespaces',
                  'nodes',
                  'pods',
                  'pods/log',
                  'replicationcontrollers',
                  'services'
                ],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: ['extensions', 'apps'],
                resources: ['deployments', 'replicasets', 'statefulsets'],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: ['autoscaling'],
                resources: ['horizontalpodautoscalers'],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: ['batch'],
                resources: ['cronjobs', 'jobs'],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: [
                  'config.istio.io',
                  'networking.istio.io',
                  'authentication.istio.io',
                  'rbac.istio.io',
                  'security.istio.io'
                ],
                resources: ['*'],
                verbs: ['create', 'delete', 'get', 'list', 'patch', 'watch']
              },
              {
                apiGroups: ['authentication.maistra.io'],
                resources: ['servicemeshpolicies'],
                verbs: ['create', 'delete', 'get', 'list', 'patch', 'watch']
              },
              {
                apiGroups: ['rbac.maistra.io'],
                resources: ['servicemeshrbacconfigs'],
                verbs: ['create', 'delete', 'get', 'list', 'patch', 'watch']
              },
              {
                apiGroups: ['apps.openshift.io'],
                resources: ['deploymentconfigs'],
                verbs: ['get', 'list', 'watch']
              },
              {
                apiGroups: ['project.openshift.io'],
                resources: ['projects'],
                verbs: ['get']
              },
              {
                apiGroups: ['route.openshift.io'],
                resources: ['routes'],
                verbs: ['get']
              },
              {
                apiGroups: ['monitoring.kiali.io'],
                resources: ['monitoringdashboards'],
                verbs: ['get', 'list']
              }
            ],
            serviceAccountName: 'kiali-operator'
          }
        ]
      }
    }
  }
};
