function Header() {
    try {
        return (
            <header data-name="header" className="text-center py-8">
                <h1 data-name="title" className="text-4xl font-bold gradient-text mb-4">
                    كاشف الذكاء الاصطناعي
                </h1>
                <p data-name="description" className="text-gray-600 text-lg">
                    أداة للكشف عن النصوص المكتوبة بواسطة الذكاء الاصطناعي
                </p>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
