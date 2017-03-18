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
$('.searchinput').addClass('is-visible')
  .hideseek({
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
      const { name, id } = client;
      const delay = i * 75;
      const html = `
          <div class="client" style="transition-delay: ${delay}ms">
            <h3 class="client__name">${name}</h3>
            <ul class="client__links">
              <li class="client__link">
                <a href="//${id}.vtexcommercestable.com.br">
                  Stable
                </a>
              </li>
              <li class="client__link">
                <a href="//${id}.vtexcommercestable.com.br/admin">
                  Admin
                </a>
              </li>
              <li class="client__link">
                <a href="//${id}.vtexcrm.com.br">
                  CRM
                </a>
              </li>
              <li class="client__link">
                <a href="//${id}.ds.vtexcrm.com.br">
                  Master Data
                </a>
              </li>
            </ul>
          </div>
        `;
      clientsList.append(html);
    });
  });
