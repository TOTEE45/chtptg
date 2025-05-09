function App() {
    try {
        const [analysisResult, setAnalysisResult] = React.useState(null);

        const handleAnalyze = async (text) => {
            try {
                const result = await analyzeText(text);
                setAnalysisResult(result);
            } catch (error) {
                console.error('Analysis error:', error);
                alert('حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.');
            }
        };

        return (
            <div data-name="app-container" className="min-h-screen">
                <Header />
                <main data-name="main-content" className="container mx-auto px-4">
                    <TextInput onAnalyze={handleAnalyze} />
                    <ResultDisplay result={analysisResult} />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
