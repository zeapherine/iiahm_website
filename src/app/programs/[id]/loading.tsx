export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24">
            <header className="bg-white border-b border-slate-200 py-12 md:py-20 animate-pulse">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="w-32 h-6 bg-slate-100 rounded mb-8" />
                    <div className="max-w-4xl">
                        <div className="w-24 h-6 bg-blue-50 rounded-full mb-4" />
                        <div className="w-2/3 h-12 bg-slate-100 rounded mb-6" />
                        <div className="w-full h-24 bg-slate-50 rounded" />
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="w-48 h-8 bg-slate-100 rounded mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="h-24 bg-white rounded-2xl border border-slate-100 animate-pulse" />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="h-64 bg-white rounded-3xl border border-slate-100 animate-pulse" />
                    </div>
                </div>
            </main>
        </div>
    );
}
