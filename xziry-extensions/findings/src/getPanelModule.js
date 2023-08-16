import FindingsPanel from "./panels/FindingsPanel";

function getPanelModule({
  commandsManager,
  extensionManager,
  servicesManager,
}) {
  return [
    {
      name: 'findings',
      iconName: 'pencil',
      iconLabel: 'Findings',
      label: 'Findings',
      component: FindingsPanel,
    },
  ];
}

export default getPanelModule;
