/*
 GTX

 Se precisar de JS, coloque nesse arquivo aqui.
 */

// SVG animation
new Vivus('logoLines', {
  type: 'sync',
  duration: 80,
  animTimingFunction: Vivus.EASE,
}, () => {
  $('.logo__svg').addClass('is-finished');
});

// Iniciate HideSeek plugin to search clients
$('.searchinput')
  .addClass('is-visible')
  .hideseek({
    attribute: 'data-keywords',
    highlight: true,
    ignore_accents: true,
  });

// Get clients and mount the template
const clientsList = $('#clientsList');
fetch('clients.json')
  .then(res => res.json())
  .then(data => {
    const { clients } = data;
    clients.map((client, i) => {
      const { name, id, keywords } = client;
      const delay = i * 75;
      const html = `
        <div class="client" data-keywords="${keywords}" style="transition-delay: ${delay}ms">
          <h3 class="client__name">${name}</h3>
          <ul class="client__links">
            <li class="client__item">
              <a class="client__link" href="http://${id}.vtexcommercestable.com.br">
                Stable
              </a>
            </li>
            <li class="client__item">
              <a class="client__link" href="http://${id}.vtexcommercestable.com.br/admin">
                Admin
              </a>
            </li>
            <li class="client__item">
              <a class="client__link" href="http://${id}.vtexcommercestable.com.br/admin/a">
                CMS
              </a>
            </li>
            <li class="client__item">
              <a class="client__link" href="http://${id}.vtexcommercestable.com.br/admin/portal">
                Portal
              </a>
            </li>
            <li class="client__item">
              <a class="client__link" href="http://${id}.vtexcrm.com.br">
                CRM
              </a>
            </li>
            <li class="client__item">
              <a class="client__link" href="http://${id}.ds.vtexcrm.com.br">
                Master Data
              </a>
            </li>
          </ul>
        </div>
      `;
      clientsList.append(html);
    });
  });
