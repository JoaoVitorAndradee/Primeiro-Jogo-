// AIDA Landing Page Generator - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

// Application initialization
function initializeApp() {
    setupEventListeners();
    setupNavigation();
    setupFormValidation();
    loadImporaMeiTemplate(); // Load the ImporaMei+ template by default
}

// Event Listeners Setup
function setupEventListeners() {
    const form = document.getElementById('aida-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Form submission
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time preview updates
    inputs.forEach(input => {
        input.addEventListener('input', debounce(updatePreview, 300));
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form Validation Setup
function setupFormValidation() {
    const requiredFields = document.querySelectorAll('input[required], textarea[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
}

// Validate individual field
function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    
    if (!value) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    }
    
    if (field.type === 'url' && value && !isValidURL(value)) {
        showFieldError(field, 'Por favor, insira uma URL válida');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('error');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'block';
    
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// URL validation
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate all required fields
    const requiredFields = event.target.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showNotification('Por favor, corrija os erros no formulário', 'error');
        return;
    }
    
    // Generate landing page
    generateLandingPage(data);
    showNotification('Landing page gerada com sucesso!', 'success');
    
    // Scroll to preview
    document.querySelector('#preview-content').scrollIntoView({
        behavior: 'smooth'
    });
}

// Generate landing page HTML
function generateLandingPage(data) {
    const html = `
        <div class="generated-landing">
            ${generateHeroSection(data)}
            ${generateInterestSection(data)}
            ${generateDesireSection(data)}
            ${generateActionSection(data)}
            ${generateFooterSection(data)}
        </div>
    `;
    
    const previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = html;
    previewContent.classList.add('fade-in');
}

// Generate Hero Section (Attention)
function generateHeroSection(data) {
    const heroImage = data['hero-image'] ? 
        `<img src="${data['hero-image']}" alt="Hero Image" class="hero-image">` : '';
    
    return `
        <section class="hero-section">
            <div class="container">
                <h1 class="hero-title">${data.headline || 'Seu Título Impactante'}</h1>
                ${data.subheadline ? `<p class="hero-subtitle">${data.subheadline}</p>` : ''}
                ${heroImage}
                <div class="problem-statement">
                    <h2>🤔 ${data.problem || 'Qual problema você resolve?'}</h2>
                </div>
            </div>
        </section>
    `;
}

// Generate Interest Section
function generateInterestSection(data) {
    const benefits = data.benefits ? 
        data.benefits.split('\n').filter(b => b.trim()).map(benefit => 
            `<div class="benefit-item">
                <i class="fas fa-check-circle"></i>
                <span>${benefit.trim()}</span>
            </div>`
        ).join('') : '';
    
    return `
        <section class="section">
            <div class="container">
                <h2>💡 Nossa Solução</h2>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">${data.solution || 'Como resolvemos seu problema'}</p>
                ${benefits ? `<div class="benefits-list">${benefits}</div>` : ''}
            </div>
        </section>
    `;
}

// Generate Desire Section
function generateDesireSection(data) {
    let testimonialsHTML = '';
    
    if (data.testimonials) {
        const testimonials = data.testimonials.split('---').filter(t => t.trim());
        testimonialsHTML = testimonials.map(testimonial => {
            const [name, text] = testimonial.split(':');
            return `
                <div class="testimonial">
                    <p>"${text ? text.trim() : testimonial.trim()}"</p>
                    ${name ? `<strong>- ${name.trim()}</strong>` : ''}
                </div>
            `;
        }).join('');
    }
    
    return `
        <section class="testimonials">
            <div class="container">
                <h2>❤️ O que nossos clientes dizem</h2>
                ${data['social-proof'] ? `<p class="social-proof"><strong>${data['social-proof']}</strong></p>` : ''}
                ${testimonialsHTML}
                ${data.guarantee ? `<div class="guarantee">
                    <h3>🛡️ Nossa Garantia</h3>
                    <p>${data.guarantee}</p>
                </div>` : ''}
            </div>
        </section>
    `;
}

// Generate Action Section
function generateActionSection(data) {
    return `
        <section class="cta-section">
            <div class="container">
                <h2>🚀 Está pronto para começar?</h2>
                ${data.discount ? `<div class="discount">${data.discount}</div>` : ''}
                ${data.price ? `<div class="price">${data.price}</div>` : ''}
                ${data.urgency ? `<div class="urgency">${data.urgency}</div>` : ''}
                <button class="cta-button" onclick="alert('Botão de ação clicado!')">
                    ${data['cta-text'] || 'QUERO COMEÇAR AGORA!'}
                </button>
                ${data['contact-info'] ? `<p style="margin-top: 2rem; opacity: 0.8;">${data['contact-info']}</p>` : ''}
            </div>
        </section>
    `;
}

// Generate Footer Section
function generateFooterSection(data) {
    return `
        <footer style="background: #1f2937; color: white; padding: 2rem; text-align: center;">
            <p>&copy; 2024 ${data.headline ? data.headline.split(' ')[0] : 'Sua Empresa'}. Todos os direitos reservados.</p>
            ${data['contact-info'] ? `<p style="margin-top: 1rem; opacity: 0.8;">${data['contact-info']}</p>` : ''}
        </footer>
    `;
}

// Update preview in real-time
function updatePreview() {
    const form = document.getElementById('aida-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Only update if we have some content
    if (data.headline || data.problem || data.solution) {
        generateLandingPage(data);
    }
}

// Load ImporaMei+ Template
function loadImporaMeiTemplate() {
    const templateData = {
        headline: "Importe da China Sem Surpresas com o ImporaMei+",
        subheadline: "A única plataforma que calcula TODOS os custos reais da sua importação antes mesmo de você comprar",
        'hero-image': "",
        problem: "Você está cansado de pagar caro no mercado nacional? Já pensou em importar da China mas tem medo dos custos ocultos, impostos surpresa e burocracias que podem quebrar seu negócio?",
        solution: "O ImporaMei+ é sua solução completa! Nossa plataforma com consultor virtual calcula EXATAMENTE quanto você vai gastar com impostos, frete, taxas e margem de lucro ANTES de você fazer qualquer pedido. Sem surpresas, sem prejuízos!",
        benefits: "✅ Cálculo completo de TODOS os impostos de importação\n✅ Simulação real de margem de lucro\n✅ Validação automática de produtos rentáveis\n✅ Guia completo de negociação com fornecedores chineses\n✅ Acompanhamento virtual do processo\n✅ Funciona com MEI simples - sem complicações\n✅ Produtos testados e validados no mercado brasileiro",
        testimonials: "Maria Silva, São Paulo: 'Finalmente consegui importar sem medo! O ImporaMei+ me mostrou exatamente quanto eu gastaria. Minha primeira importação teve 280% de lucro!'\n---\nJoão Santos, Rio de Janeiro: 'Antes eu tinha medo dos impostos surpresa. Agora sei exatamente quanto vou gastar antes mesmo de comprar. Já fiz 5 importações com sucesso!'\n---\nAna Costa, Belo Horizonte: 'A plataforma me ensinou a negociar com chineses e encontrar os melhores produtos. Em 3 meses já recuperei o investimento!'",
        'social-proof': "Mais de 2.847 pessoas já importaram com segurança usando o ImporaMei+",
        guarantee: "Garantia de 30 dias: Se você não conseguir fazer sua primeira simulação completa de importação, devolvemos 100% do seu dinheiro!",
        'cta-text': "QUERO IMPORTAR SEM SURPRESAS AGORA!",
        price: "R$ 297,00",
        discount: "🔥 OFERTA ESPECIAL: De R$ 897 por apenas R$ 297 (67% OFF)",
        urgency: "⚠️ ATENÇÃO: Apenas 47 vagas restantes neste mês! Esta oferta expira em 48 horas!",
        'contact-info': "Suporte: contato@imporamei.com | WhatsApp: (11) 99999-9999"
    };
    
    // Fill the form with template data
    Object.entries(templateData).forEach(([key, value]) => {
        const field = document.querySelector(`[name="${key}"]`);
        if (field) {
            field.value = value;
        }
    });
    
    // Generate the preview
    generateLandingPage(templateData);
    
    // Show notification
    setTimeout(() => {
        showNotification('Template ImporaMei+ carregado! Personalize os campos conforme necessário.', 'info');
    }, 1000);
}

// Template loading functions
function loadTemplate(templateType) {
    const templates = {
        ecommerce: {
            headline: "Dobre Suas Vendas Online em 30 Dias",
            subheadline: "O método comprovado usado por +5.000 lojistas para aumentar suas conversões",
            problem: "Sua loja online tem muitas visitas mas poucas vendas? Você está perdendo clientes todos os dias e não sabe por quê?",
            solution: "Nossa plataforma de otimização de e-commerce identifica exatamente onde você está perdendo vendas e implementa as correções automaticamente.",
            benefits: "Aumento de até 300% nas conversões\nOtimização automática de páginas\nTestes A/B integrados\nRelatórios detalhados\nSuporte especializado",
            'cta-text': "QUERO DOBRAR MINHAS VENDAS!"
        },
        service: {
            headline: "Atraia Clientes de Alto Valor Para Seu Negócio",
            subheadline: "Sistema completo de atração e conversão para consultores e prestadores de serviços",
            problem: "Você tem dificuldade para encontrar clientes que valorizem seu trabalho e paguem o que você realmente vale?",
            solution: "Nossa metodologia ensina como posicionar seus serviços como premium e atrair apenas clientes ideais que pagam bem.",
            benefits: "Clientes que pagam 3x mais\nPosicionamento premium no mercado\nFunil de vendas automatizado\nScripts de vendas testados\nComunidade exclusiva",
            'cta-text': "QUERO CLIENTES PREMIUM!"
        },
        course: {
            headline: "Domine [Sua Especialidade] em 60 Dias",
            subheadline: "O curso mais completo e prático para você se tornar um expert reconhecido no mercado",
            problem: "Você quer se especializar em uma área mas não sabe por onde começar ou não tem tempo para estudar anos?",
            solution: "Nosso método acelerado condensa anos de experiência em um sistema passo-a-passo que você aplica enquanto aprende.",
            benefits: "Metodologia passo-a-passo\nCertificado reconhecido\nMentoria individual\nComunidade de alunos\nMaterial atualizado\nAcesso vitalício",
            'cta-text': "QUERO ME TORNAR UM EXPERT!"
        },
        app: {
            headline: "Automatize Seu Negócio Sem Complicação",
            subheadline: "A ferramenta que pequenos negócios usam para competir com grandes empresas",
            problem: "Você perde tempo com tarefas manuais e repetitivas que poderiam ser automatizadas?",
            solution: "Nossa plataforma automatiza os processos mais importantes do seu negócio sem precisar de conhecimento técnico.",
            benefits: "Automação sem código\nIntegrações nativas\nDashboards intuitivos\nSupporte 24/7\nTeste grátis por 14 dias\nCancelamento a qualquer momento",
            'cta-text': "QUERO AUTOMATIZAR AGORA!"
        }
    };
    
    const template = templates[templateType];
    if (!template) return;
    
    // Fill form with template data
    Object.entries(template).forEach(([key, value]) => {
        const field = document.querySelector(`[name="${key}"]`);
        if (field) {
            field.value = value;
        }
    });
    
    // Generate preview
    generateLandingPage(template);
    
    // Scroll to form
    document.querySelector('#builder').scrollIntoView({
        behavior: 'smooth'
    });
    
    showNotification(`Template ${templateType} carregado com sucesso!`, 'success');
}

// Scroll to builder section
function scrollToBuilder() {
    document.querySelector('#builder').scrollIntoView({
        behavior: 'smooth'
    });
}

// Reset form
function resetForm() {
    const form = document.getElementById('aida-form');
    form.reset();
    
    // Clear preview
    const previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = `
        <div class="preview-placeholder">
            <i class="fas fa-magic"></i>
            <p>Preencha o formulário para ver o preview da sua landing page</p>
        </div>
    `;
    
    // Clear any errors
    const errorElements = form.querySelectorAll('.field-error');
    errorElements.forEach(error => error.remove());
    
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    showNotification('Formulário limpo com sucesso!', 'info');
}

// Toggle preview visibility
function togglePreview() {
    const previewContent = document.getElementById('preview-content');
    const button = event.target.closest('.btn-icon');
    
    if (previewContent.style.display === 'none') {
        previewContent.style.display = 'block';
        button.innerHTML = '<i class="fas fa-eye-slash"></i>';
        button.title = 'Ocultar Preview';
    } else {
        previewContent.style.display = 'none';
        button.innerHTML = '<i class="fas fa-eye"></i>';
        button.title = 'Mostrar Preview';
    }
}

// Download HTML
function downloadHTML() {
    const previewContent = document.getElementById('preview-content');
    const generatedContent = previewContent.querySelector('.generated-landing');
    
    if (!generatedContent) {
        showNotification('Gere uma landing page primeiro!', 'error');
        return;
    }
    
    // Get form data for title
    const form = document.getElementById('aida-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const fullHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline || 'Landing Page AIDA'}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        ${getGeneratedLandingCSS()}
    </style>
</head>
<body>
    ${generatedContent.outerHTML}
</body>
</html>`;
    
    // Create and download file
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `landing-page-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Landing page baixada com sucesso!', 'success');
}

// Get CSS for generated landing page
function getGeneratedLandingCSS() {
    return `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .hero-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.1;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .hero-image {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 2rem 0;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .problem-statement {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 2rem;
            backdrop-filter: blur(10px);
        }
        
        .section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            text-align: center;
            color: #1f2937;
        }
        
        .benefits-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .benefit-item {
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-left: 4px solid #667eea;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .benefit-item i {
            color: #10b981;
            font-size: 1.5rem;
        }
        
        .testimonials {
            background: #f3f4f6;
            padding: 4rem 2rem;
        }
        
        .social-proof {
            text-align: center;
            font-size: 1.5rem;
            color: #10b981;
            margin-bottom: 3rem;
        }
        
        .testimonial {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            margin: 1rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .guarantee {
            background: #10b981;
            color: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            margin-top: 3rem;
        }
        
        .cta-section {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .cta-section h2 {
            color: white;
            margin-bottom: 2rem;
        }
        
        .price {
            font-size: 3rem;
            font-weight: 800;
            color: #10b981;
            margin: 1rem 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .discount {
            background: #ef4444;
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            display: inline-block;
            margin: 1rem 0;
            font-size: 1.2rem;
            animation: pulse 2s infinite;
        }
        
        .urgency {
            background: #ff6b6b;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            margin: 1rem 0;
            animation: pulse 2s infinite;
            font-size: 1.1rem;
        }
        
        .cta-button {
            background: white;
            color: #f5576c;
            padding: 1.5rem 3rem;
            font-size: 1.5rem;
            font-weight: 800;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 2rem 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .section {
                padding: 2rem 1rem;
            }
            
            .benefits-list {
                grid-template-columns: 1fr;
            }
            
            .cta-button {
                font-size: 1.2rem;
                padding: 1rem 2rem;
            }
            
            .price {
                font-size: 2rem;
            }
        }
    `;
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#6366f1',
        warning: '#f59e0b'
    };
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; margin-left: 1rem; cursor: pointer; font-size: 1.2rem;">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .field-error {
        color: #ef4444 !important;
        font-size: 0.875rem !important;
        margin-top: 0.25rem !important;
        display: block !important;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);