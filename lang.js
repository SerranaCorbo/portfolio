(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var language = params.get('lang') === 'en' ? 'en' : 'es';

  var common = {
    'Inicio': 'Home',
    'Sobre mí': 'About me',
    'Proyectos': 'Projects',
    'Contacto': 'Contact',
    'Diseñadora Industrial · UX/UI': 'Industrial Designer · UX/UI',
    'Diseño Industrial + UX · UI': 'Industrial Design + UX · UI',
    'Serrana Corbo · Diseñadora Industrial + UX/UI': 'Serrana Corbo · Industrial Designer + UX/UI',
    'Ver proyecto': 'View project',
    'Proyecto anterior': 'Previous project',
    'Siguiente proyecto': 'Next project',
    'Descargar CV': 'Download CV',
    'Disciplina': 'Discipline',
    'Contexto': 'Context',
    'Año': 'Year',
    'Colaboración': 'Collaboration',
    'Reflexión': 'Reflection',
    'Proceso': 'Process',
    'Materialización': 'Materialization',
    'Investigación': 'Research',
    'Conceptualización': 'Conceptualization',
    'Alternativas': 'Alternatives',
    'Desarrollo': 'Development',
    'Testeo': 'Testing',
    'Ideación': 'Ideation',
    'Empatizar': 'Empathize',
    'Definir': 'Define',
    'Idear': 'Ideate',
    'Prototipar': 'Prototype',
    'Próximamente': 'Coming soon',
    'Proyecto en proceso': 'Project in progress',
    'Progreso': 'Progress',
    'Volver al portfolio': 'Back to portfolio',
    'Error de navegación': 'Navigation error',
    'Volver al inicio': 'Back to home',
    'Disponible para proyectos': 'Available for projects',
    'LinkedIn': 'LinkedIn',
    'Instagram': 'Instagram',
    'WhatsApp': 'WhatsApp',
    'Skills': 'Skills',
    'Diseñadora Industrial': 'Industrial Designer',
    'Diseño Industrial': 'Industrial Design',
    'Diseño Industrial · Ergonomía · Trabajo Final de Grado': 'Industrial Design · Ergonomics · Final Degree Project',
    'Diseño Industrial · Señalética · Proyecto académico': 'Industrial Design · Signage · Academic project',
    'Diseño Industrial · Espacio público · Proyecto académico': 'Industrial Design · Public space · Academic project',
    'Proyecto académico · Grupal': 'Academic project · Team project',
    'Trabajo Final de Grado · EUCD FADU Udelar': 'Final Degree Project · EUCD FADU Udelar',
    'Proyecto académico . EUCD FADU Udelar': 'Academic project · EUCD FADU Udelar',
    'CAD · Render': 'CAD · Rendering',
    'Señalética · UX': 'Signage · UX',
    'Ergonomía · ID': 'Ergonomics · ID',
    'Diseño urbano': 'Urban design',
    'Espacio público': 'Public space',
    'Ergonomía': 'Ergonomics',
    'Adultos · actividad física': 'Adults · physical activity',
    'Sobre mí': 'About me',
    'Mis': 'My',
    'proyectos': 'projects',
    'Lo que': 'What I',
    'sé hacer': 'do best',
    'Sobre': 'About',
    'mí': 'me',
    '¿Hablamos?': 'Let’s talk?',
    'Escribime un mensaje': 'Send me a message',
    'Descargar carpeta técnica': 'Download technical folder',
    'Descargar documentación técnica': 'Download technical documentation',
    'En el Parque Batlle': 'At Parque Batlle',
    'En uso': 'In use',
    'Logo': 'Logo',
    'Misión': 'Mission',
    'Valores': 'Values',
    'Producto': 'Product',
    'Tipologías': 'Typologies',
    'Constructivo': 'Construction',
    'Resultado': 'Result',
    'Visual': 'Visual',
    'Uso': 'Use',
    'Marca': 'Brand',
    'El contexto': 'The context',
    'El producto': 'The product',
    'Secuencia de uso': 'Usage sequence',
    'Identidad de marca': 'Brand identity',
    'Detalles constructivos': 'Construction details',
    'Comunicación visual': 'Visual communication',
    'Solución final': 'Final solution',
    'Resultado final': 'Final result',
    'Las dos tipologías': 'The two typologies',
    'Los dos módulos': 'The two modules',
    'La bandeja': 'The tray',
    'Medidas con fundamento': 'Evidence-based measurements',
    'Paleta de colores': 'Color palette',
    'Sistema tipográfico': 'Typography system',
    'Elementos del sistema': 'System elements'
  };

  var indexData = {
    '.hero-eyebrow': ['Industrial Designer · UX/UI'],
    '.hero-sub': ['Industrial designer with a strong interest in <strong>technical drawings and rendering</strong>, complemented by training in <strong>UX/UI design</strong> to enhance user experiences.'],
    '.hero-btn span': ['View projects'],
    '.section-label': ['About me', 'Skills', 'Projects'],
    '.section-title': ['About <em>me</em>', 'What I <em>do best</em>', 'My <em>projects</em>'],
    '.about-p': [
      'Hi :) I’m Serrana, based in <strong>Montevideo, Uruguay</strong>. I’m an <strong>industrial designer</strong> graduated from <strong>FADU (Udelar)</strong>, with additional training in <strong>UX/UI design</strong>.',
      'I combine both disciplines with a <strong>user-centered perspective</strong>. I’m motivated by being part of the <strong>entire design process</strong>: from understanding a problem and empathizing with the people experiencing it, to conceptualizing, prototyping and seeing an idea take shape.',
      'Today I’m focused on <strong>growing professionally</strong> and creating value through design, looking for opportunities where I can combine <strong>creativity, analysis and empathy</strong> to create experiences and products that make a <strong>positive impact</strong>.'
    ],
    '.skill-category': ['Industrial Design', 'Industrial Design', 'Visualization', 'UX · UI', 'UX · UI', 'Process'],
    '.skill-name': ['CAD & Modeling', 'Technical Drawings', '3D Rendering', 'UX Research', 'UI Design', 'Prototyping'],
    '.skill-desc': [
      'Technical and parametric 3D modeling. Complex geometries optimized for real-world manufacturing.',
      'Complete documentation: views, sections, dimensions and material specifications.',
      'Photorealistic visualizations with studio-level materials, lighting and composition.',
      'User research, interviews, usability testing and behavioral analysis.',
      'Digital interfaces in Figma. Design systems, components and interactive prototypes.',
      'Physical and digital prototyping. Fast iteration from sketch to functional model.'
    ],
    '.work-chip': ['CAD · Rendering', 'Signage · UX', 'Ergonomics · ID'],
    '.work-title': ['Residencial Nahuel', 'Cultura en tu Barrio', 'TreeFlex'],
    '.work-desc': [
      'Adjustable support devices designed to improve the dining experience of older adults.',
      'Urban signage system created to promote cultural activities in Montevideo neighborhoods.',
      'Post-workout stretching device designed for Parque Batlle y Ordóñez.'
    ],
    '.availability-pill': ['Available for projects'],
    '.contact-sub': ['Have a project in mind? I’d love to hear about it and explore how design can help you solve it.'],
    '.contact-cta span': ['Send me a message'],
    '.footer-tagline': ['Industrial Design + UX · UI']
  };

  var projectData = {
    'proyecto-residencial-nahuel.html': {
      '.project-hero-chip': ['Industrial Design · Ergonomics · Final Degree Project'],
      '.project-hero-sub': ['Two support devices designed to improve the dining experience of older adults, adapted to the existing furniture in a residential home in Prado, Montevideo.'],
      '.meta-value': ['Industrial Design', 'Final Degree Project · EUCD FADU Udelar', '2025', 'Valentina Varela'],
      '.cs-label': ['01 · The context', '02 · Process', '03 · The two typologies', '04 · Ergonomics', '05 · Construction details', '06 · Final result', '07 · Reflection'],
      '.cs-title': ['Where does the project <em>come from?</em>', 'How we arrived <em>at the solution</em>', 'One tray, <em>two solutions</em>', '<em>Measurements designed</em> for real people', 'How it is <em>built</em>', 'The devices <em>in context</em>', '<em>What this project</em> left us'],
      '.cs-body': [
        'As part of the final degree project, we worked from a challenge identified at <strong>Residencial Nahuel</strong>, a home for older adults in Montevideo’s Prado neighborhood. The home has 26 residents with different levels of autonomy and a dining room furnished with several types of furniture.',
        'During the first visits, we observed difficulties related to eating, such as reaching food, handling utensils and maintaining a comfortable posture during meals. The existing furniture did not specifically address the residents’ needs, so we proposed <strong>two support devices</strong> to be integrated into the space, adapted to the existing furniture and designed to facilitate the residents’ dining experience.',
        'The process followed the <strong>Design Thinking</strong> methodology, focusing on direct observation and a real understanding of the context before proposing any solution.',
        'The project includes two devices that share the same tray but differ in their support system. Both typologies were developed from the different types of seats in the residential home’s dining room.',
        'Both typologies share the same tray: an enveloping, curved surface without sharp edges, with several integrated components responding to the specific needs of the environment.',
        'Every product dimension has a reason behind it. Anthropometric data was collected from the residents and the space’s actual furniture, using Panero and Zelnik (1996) as a reference for functional seated dimensions.',
        'The technical documentation includes elevations, plans, detail views and exploded assembly views for both typologies. The supports are made of <strong>stainless steel</strong> with a water-based polyurethane enamel, chosen for its resistance to frequent cleaning and humidity.',
        'The result is two complementary devices that integrate with the existing furniture without modifying it. The renders show both typologies in use.',
        'This project allowed us to work from start to finish on a specific challenge, from surveying the residential home to developing a design proposal. Contact with residents, staff and the context of use helped us understand the importance of considering <span>people’s needs and the characteristics of the environment</span> throughout the process. It also let us apply research, analysis and product development tools, making decisions based on what we observed and on the requirements defined during the project.'
      ],
      '.dt-tab': ['Empathize', 'Define', 'Ideate', 'Develop', 'Prototype'],
      '.dt-panel-label': ['Stage 01', 'Stage 02', 'Stage 03', 'Stage 04', 'Stage 05'],
      '.dt-panel-title': ['Empathize', 'Define', 'Ideate', 'Develop', 'Prototype and evaluate'],
      '.tip-card-badge': ['Typology A', 'Typology B'],
      '.tip-card-title': ['Tray with adjustable legs', 'Tray attached to the armrest'],
      '.ergo-label': ['Tray width', 'Tray depth', 'Adjustable height range (Typ. A)', 'Cup holder inner diameter', 'Plate holder inner diameter', 'Clamp opening (Typ. B)'],
      '.mat-card-label': ['Support material', 'Surface finish'],
      '.mat-card-title': ['Stainless steel', 'Aliphatic polyurethane enamel'],
      '.download-hint': ['Plans, specifications and detailed views — PDF']
    },
    'proyecto-cultura-en-tu-barrio.html': {
      '.project-hero-chip': ['Industrial Design · Signage · Academic project'],
      '.project-hero-sub': ['Urban signage system designed to improve the visibility of Centro Cultural Artesano and strengthen its connection with the residents of Peñarol, Montevideo.'],
      '.meta-value': ['Industrial Design', 'Academic project · Team project', '2024', 'Valentina Rapshy · María Eugenia Martínez'],
      '.cs-label': ['01 · The context', '02 · Process', '03 · Construction details', '04 · Visual communication', '05 · Final solution', '06 · Reflection'],
      '.cs-title': ['Where does the project <em>come from?</em>', 'How we arrived <em>at the solution</em>', 'The system’s <em>anatomy</em>', 'The system’s <em>visual language</em>', 'The system <em>in space</em>', '<em>What this project</em> left us'],
      '.cs-body': [
        'Academic project developed within the <strong>Project Unit 4</strong> course, focused on designing a signage system to improve the visibility of <strong>Centro Cultural Artesano</strong> and strengthen its connection with residents of the Peñarol neighborhood. It emerged from the center’s low visibility in the community and the limited involvement of some neighbors in its activities, reflecting a <strong>disconnect between the center’s cultural offering and the neighborhood residents</strong>.',
        'The system includes two types of signage. <strong>Informational signage</strong>, located at central points in Peñarol and neighboring neighborhoods, communicates the center’s schedule and activities. <strong>Directional signage</strong>, located on main avenues, points toward the cultural center and indicates <strong>the remaining walking time</strong>.',
        'The process went through four iterative stages, focusing on the <strong>real resident of Peñarol</strong>. Hover over each stage for more detail.',
        'Each piece was designed with <strong>production, weather resistance and ease of maintenance</strong> in mind. The views include elevations, plans and exploded assembly drawings.',
        'The visual identity takes elements from the <strong>Centro Cultural Artesano identity</strong> to maintain a connection with the institution. The logo’s purple was chosen as the main color and combined with yellow for contrast, while light blue and white complete the palette.',
        'The Centro Cultural Artesano logo was also abstracted and incorporated as a <strong>graphic resource within the system</strong>, appearing both in the signage elements and in the structure of the informational sign.'
      ],
      '.pc-title': ['Research', 'Ideation', 'Development', 'Testing'],
      '.palette-label': ['Color palette', 'Typography system'],
      '.swatch-tip': ['Dark purple', 'Light blue', 'Yellow', 'Pure white'],
      '.swatch-name': ['Dark purple', 'Light blue', 'Yellow', 'Pure white'],
      '.typo-card-role': ['Headings', 'Body'],
      '.moodboard-title': ['System elements'],
      '.sa-label': ['Visual anatomy of both typologies'],
      '.download-hint': ['Plans, specifications and technical details — PDF']
    },
    'proyecto-treeflex.html': {
      '.project-hero-chip': ['Industrial Design · Public space · Academic project'],
      '.project-hero-sub': ['Post-workout stretching device for adults, designed for Parque Batlle y Ordóñez in Montevideo. An organic form inspired by the branches of the tree that gives the product its name.'],
      '.meta-value': ['Industrial Design', 'Academic project · EUCD FADU Udelar', '2023', 'Valentina Rapshy'],
      '.cs-label': ['01 · The context', '02 · Process', '03 · The product', '04 · Usage sequence', '05 · Materialization', '06 · Brand identity', '07 · Reflection'],
      '.cs-title': ['Where does the project <em>come from?</em>', 'How we arrived <em>at TreeFlex</em>', 'What <em>is</em> TreeFlex', '<em>Four muscles,</em> one station', '<em>Designed to</em> last outdoors', '<em>TreeFlex</em>', '<em>What this project</em> left us'],
      '.cs-body': [
        'As part of an academic project, we worked on Parque Batlle y Ordóñez, one of Montevideo’s largest and busiest public spaces. The challenge was to identify a need connected to sports activities in the park and develop a product proposal integrated into its surroundings.',
        'By observing exercise and stretching practices, we found a specific opportunity: <strong>design a device for post-workout lower-body stretching</strong>, intended for the park and adaptable to a wide range of users.',
        'The process followed four stages — research, conceptualization, alternative development and materialization — using tools such as the Field Guide, UPAC, the User Map and ergonomic analyses specific to the Uruguayan population.',
        'TreeFlex is a lower-body stretching device designed to be installed in Parque Batlle y Ordóñez. Its organic galvanized steel tube form abstracts the <strong>branches of a tree</strong>: different directions and heights, matching the variety of stretching exercises.',
        'The system consists of two modules with the same morphology but different heights — one for the <strong>5th percentile</strong> and another for the <strong>95th percentile</strong> — so all users can stretch without adopting forced postures.',
        'There is no predefined order — users choose which muscle to stretch first. The device offers specific supports and grips for each lower-body stretch.',
        'Each dimension responds to real data from the working-age Uruguayan population, based on research by Álvaro Federico Ferreira Resende.',
        'All materials and construction decisions respond to the context: public space, outdoor exposure, frequent use and vandalism resistance.',
        'As part of the project, a brand identity was developed for TreeFlex, a company created within the academic project. The brand is presented as a Uruguayan urban equipment proposal focused on sports and wellbeing, with an emphasis on accessibility, comfort and new ways of using public space.',
        'The TreeFlex project helped us understand that a design solution does not end with solving a need; it also means asking how, where and for whom it works. The development and feedback process was key to reaching a proposal that considered not only use, but also safety, ergonomics and its relationship with public space.'
      ],
      '.tl-step-label': ['Research', 'Conceptualization', 'Alternatives', 'Materialization'],
      '.tl-panel-label': ['Stage 01', 'Stage 02', 'Stage 03', 'Stage 04'],
      '.tl-panel-title': ['Research in the field', 'Analysis and conceptualization', 'Ideation and alternatives', 'Materialization'],
      '.product-card-title': ['Urban stretching device'],
      '.modulo-badge': ['Module 1 · P5', 'Module 2 · P95'],
      '.modulo-card-title': ['Module 1 — 5th percentile', 'Module 2 — 95th percentile'],
      '.musculo-name': ['Hamstrings', 'Calves', 'Glutes', 'Quadriceps'],
      '.ergo-label': ['Grip diameter', 'Hamstring bar height', 'Quadriceps/glute bar height', 'Minimum spacing between tubes', 'Social proxemic distance', 'Green block openings'],
      '.mat-card-label': ['Structure', 'Finish', 'Safety area', 'Fixing'],
      '.mat-card-title': ['Curved galvanized steel', 'Baked electrostatic paint', 'Concrete green blocks', 'Anchoring on a concrete base'],
      '.brand-slogan': ['“Flexibility for your best version.”'],
      '.brand-item-title': ['Mission', 'Values', 'Product']
    }
  };

  function clean(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function setValues(selector, values) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (node, index) {
      if (values[index] !== undefined) node.innerHTML = values[index];
    });
  }

  function setLabelValues(selector, values) {
    document.querySelectorAll(selector).forEach(function (node, index) {
      if (values[index] !== undefined) node.setAttribute('data-label', values[index]);
    });
  }

  function translateCommon() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (!node.nodeValue.trim() || node.parentElement.closest('script,style')) return;
      var original = clean(node.nodeValue);
      if (common[original]) {
        node.nodeValue = node.nodeValue.replace(original, common[original]);
      }
    });
  }

  function addLanguageControl() {
    var nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.language-switcher')) return;
    var control = document.createElement('div');
    control.className = 'language-switcher';
    control.innerHTML = '<span class="language-label">Idioma</span><button type="button" class="language-option ' + (language === 'es' ? 'active' : '') + '" data-language="es">ES</button><span class="language-divider">/</span><button type="button" class="language-option ' + (language === 'en' ? 'active' : '') + '" data-language="en">EN</button>';
    nav.appendChild(control);
    control.querySelectorAll('[data-language]').forEach(function (button) {
      button.addEventListener('click', function () {
        var next = button.getAttribute('data-language');
        var url = new URL(window.location.href);
        if (next === 'en') url.searchParams.set('lang', 'en');
        else url.searchParams.delete('lang');
        window.location.href = url.toString();
      });
    });
  }

  function preserveLanguageInLinks() {
    document.querySelectorAll('a[href]').forEach(function (link) {
      if (link.closest('.language-switcher')) return;
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
      href = href.replace(/^portfolio-serrana-v[0-9]+\.html/i, 'index.html');
      if (!/\.html(?:[?#]|$)|^index(?:\.html)?(?:[?#]|$)/i.test(href)) return;
      var url = new URL(href, window.location.href);
      if (language === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      link.setAttribute('href', url.pathname.split('/').pop() + (url.search ? url.search : '') + (url.hash ? url.hash : ''));
    });
  }

  function applyEnglish() {
    translateCommon();
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var data = page === 'index.html' ? indexData : projectData[page];
    if (data) Object.keys(data).forEach(function (selector) { setValues(selector, data[selector]); });
    if (page === 'proyecto-residencial-nahuel.html') {
      setValues('.bi-label', ['Exterior of Residencial Nahuel', 'Dining room and eating area', 'Existing furniture', 'Observation stage', 'Dining room and eating area']);
      setValues('.dt-panel-img-label', ['Observation in the field', 'Synthesis of findings', 'Exploration of alternatives', 'Technical modeling in Fusion 360', '2D and 3D simulators']);
    }
    if (page === 'proyecto-cultura-en-tu-barrio.html') {
      setValues('.bi-label', ['Centro Cultural Artesano facade', 'Centro Cultural Artesano room', 'Urban context', 'Urban context']);
      setValues('.pc-desc', ['Survey of the neighborhood, interviews with residents and analysis of the existing urban space.', 'Generation of concepts, sketching and formal exploration of both signage types.', 'Technical modeling, material definition, structure and anchoring system for an urban setting.', 'Visual validation, scale adjustment and legibility under different conditions.']);
      setValues('.pc-extra', ['Mapping pedestrian routes, photographic survey, and interviews with residents and Centro Cultural Artesano staff.', 'A range of formal alternatives for each sign type. Evaluation based on visibility, formal and identity coherence, and production feasibility.', 'Final technical drawings, material specifications and anchoring system for existing urban furniture.', 'Simulation of the signs in neighborhood photographs. Evaluation of visual impact, proportion and legibility at different distances and lighting conditions.']);
    }
    if (page === 'proyecto-treeflex.html') {
      setLabelValues('.sp-dot', ['Context', 'Process', 'Product', 'Use', 'Materialization', 'Result', 'Brand', 'Reflection']);
      setValues('.cs-tag', ['Public space', 'Parque Batlle y Ordóñez', 'Urban design', 'Ergonomics', 'Adults · physical activity']);
      setValues('.tl-panel-img-label', ['Observation in the field', 'User map and UPAC', 'Sketches and alternatives', 'Simulators with real users']);
      setValues('.r-label', ['At Parque Batlle', 'In use', 'Module 1 — P5', 'Grip detail', 'Safety area']);
    }
    if (page === '404.html') {
      setValues('.label-404', ['Navigation error']);
      setValues('.title-404', ['This page <span>does not exist.</span>']);
      setValues('.sub-404', ['The link you followed led to an empty place. Move your cursor if you don’t believe me — then head back home.']);
      setValues('.line-txt', ['Serrana Corbo · Industrial Design + UX/UI']);
    }
    document.documentElement.lang = 'en';
    document.title = document.title.replace('Diseñadora Industrial', 'Industrial Designer').replace('Diseño Industrial', 'Industrial Design');
  }

  var style = document.createElement('style');
  style.textContent = '.language-switcher{display:flex;align-items:center;gap:7px;margin-left:28px;flex-shrink:0;font-family:var(--font-body,Manrope,sans-serif);font-size:11px;letter-spacing:.08em}.language-label{color:var(--text3,#9CA3AF);font-size:10px;text-transform:uppercase;margin-right:3px}.language-option{border:0;background:none;padding:5px 3px;color:var(--text3,#9CA3AF);font:600 11px var(--font-body,Manrope,sans-serif);letter-spacing:.08em;cursor:pointer;transition:color .2s,transform .2s}.language-option:hover,.language-option.active{color:var(--lav,#7C3AED)}.language-option.active{font-weight:700}.language-divider{color:var(--border-sm,#b4bedc)}@media(max-width:768px){.language-switcher{margin-left:14px;gap:4px}.language-label{display:none}.language-option{font-size:10px;padding:5px 2px}}';
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', function () {
    addLanguageControl();
    preserveLanguageInLinks();
    if (language === 'en') applyEnglish();
    else document.documentElement.lang = 'es';
  });
})();
