let leaders_dscrpn = {
	anita: "Prior to FourFold Consulting, Anita was General Manager People and Culture at Kinrise. Working closely with the CEO, she helped to integrate several independent food manufacturing businesses to form Kinrise, including establishing the executive team, defining the business strategy, operating model and transformation priorities, flexing between growth and cost agendas, and coordinating the COVID- 19 business-wide response.In her role as Executive Manager Group Strategy at ANZ Banking Group, Anita led one of the CEO’s four medium - term strategic goals to drive a purpose and values - led transformation of the bank.She engaged with leaders and the wider business to define ANZ’s purpose and integrate this with strategy, products, services, values, governance and decision - making.Throughout her career at Hay Group, Rio Tinto, ANZ and Kinrise, Anita has brought a revitalised approach to leadership, learning, talent and succession planning, employee engagement, diversity and inclusion, performance and remuneration – with an eye for evolving market practice and practical solutions that meet business needs and maturity.Anita is a Vincent Fairfax Fellow(ethical leadership in business) and completed an executive program with MIT Sloan on digitizing banking.She holds a Bachelor’s degree in Science(Psychology) and a Masters in Organisational Psychology both from the University of New South Wales.",
  kyn: "Prior to FourFold Consulting, Kynwynn was the General Manager of Finance and Strategy at Racing.com. In this role she helped transform a disaggregated business into an integrated, cross-functional entity. At the same time, she led the internalisation and restructuring of the finance function to enable greater oversight and control.In her role as the Director of Strategy at lawlab, a technology start-up, Kynwynn led a strategic review to establish clear business priorities, explore strategic alliances and funding options. At Goldman Sachs, Kynwynn was the Deputy Head of Research for Australia and New Zealand and an equity research analyst involved in the analysis and valuation of companies though periods of intense corporate activity. As the Deputy Head, Kynwynn shaped and led multiyear strategy initiatives, working closely with People and Culture to manage and optimise the performance and value of the research team. A common thread through Kynwynn’s career is her ability to think broadly and deeply about issues, and bring together the right people across finance, operations and strategy to enable effective change, transformation or growth.Kynwynn holds a Bachelor’s degree in Engineering and Science (Environmental) from the University of Melbourne and a Masters in Applied Finance from Macquarie University."
}
let read_more_anita = document.getElementById('read_more_anita');
read_more_anita.onclick = function () {
  let dscrpn_anita = document.createElement('p');
  dscrpn_anita.innerText = leaders_dscrpn.anita;
  document.getElementById("anitaDiv").appendChild(dscrpn_anita); 
}

document.getElementById('read_more_kyn').onclick = function () {
  let dscrpn_kyn = document.createElement('p');
  dscrpn_kyn.innerText = leaders_dscrpn.kyn;
	document.getElementById("kynDiv").appendChild(dscrpn_kyn); 
}


let services_item = document.getElementsByClassName('services_item');
services_item.onclick = function () {
  let services = document.createElement('div');
  services.innerText = '<p>We support organisations to discover, refine and realise their purpose and strategy. We help think through the financial, competitive, and societal impacts of choices with the aim of running more profitable and responsible businesses.<br>We will:</p><ul><li>Uncover or discover purpose</li><li>Define and review strategic plans, vision and values</li><li>Guide how to govern, lead and live purpose</li></ul>';
  console.log(services);
  document.getElementsByClassName("service-description").appendChild(services);
}
