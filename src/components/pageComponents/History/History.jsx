import React, { useState, useEffect } from 'react';
import { Clock, Download, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { SearchFilter } from '../../baseComponents/SearchFilter';
import { BsStopwatch } from 'react-icons/bs';
import SettlementModal from './SettlementModal';

// Mock icons for accounts
const PayTMIcon = () => <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>;
const GooglepayIcon = () => <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>;
const PhonepeIcon = () => <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>;
const PayIcon = () => <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">₹</div>;

const getAccountIcon = (account) => {
  switch (account?.toLowerCase()) {
    case 'paytm': return <PayTMIcon />;
    case 'googlepay': return <GooglepayIcon />;
    case 'phonepe': return <PhonepeIcon />;
    case 'pay': return <PayIcon />;
    default: return <PayIcon />;
  }
};

const TransactionCard = ({ txn }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-mono text-sm text-gray-500">Transaction ID</div>
          <div className="font-medium text-gray-900">{txn.transaction_id}</div>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          txn.status === 'completed' || txn.status === 'success'
            ? 'bg-green-100 text-green-800'
            : txn.status === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : txn.status === 'failed' || txn.status === 'error'
            ? 'bg-red-100 text-red-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
            txn.status === 'completed' || txn.status === 'success'
              ? 'bg-green-500'
              : txn.status === 'pending'
              ? 'bg-yellow-500'
              : txn.status === 'failed' || txn.status === 'error'
              ? 'bg-red-500'
              : 'bg-gray-500'
          }`} />
          {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
        </span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="font-mono text-sm text-gray-500">Amount</div>
          <div className="flex items-center space-x-1">
            <span className="text-green-600 font-semibold">₹</span>
            <span className="font-semibold text-green-600">{txn.amount.toLocaleString()}</span>
          </div>
        </div>
        <div>
          <div className="font-mono text-sm text-gray-500">Wallet</div>
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">{getAccountIcon(txn.wallet?.name)}</div>
            <div className="font-medium text-gray-800">{txn.wallet?.name}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-mono text-sm text-gray-500">Date & Time</div>
        <div className="font-medium text-gray-900">
          {new Date(txn.created_date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </div>
        <div className="text-xs text-gray-500">
          {new Date(txn.created_date).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

const MobilePagination = ({ page, totalPages, setPage }) => {
  const maxVisible = 3;
  const currentPage = page + 1;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = [];
  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 mt-4 flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <button
          className="p-2 rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
        >
          &lt;
        </button>

        {pages.map((pageNumber, index) => (
          pageNumber === '...' ? (
            <span key={`dots-${index}`} className="px-2 py-1 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber - 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                pageNumber === currentPage
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-50 text-gray-700 border border-gray-200'
              }`}
            >
              {pageNumber}
            </button>
          )
        ))}

        <button
          className="p-2 rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40"
          disabled={page >= totalPages - 1}
          onClick={() => setPage((p) => p + 1)}
        >
          &gt;
        </button>
      </div>
      <div className="text-xs text-gray-600 mt-2">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

const DesktopPagination = ({ page, totalPages, setPage }) => {
  const maxVisible = 5;
  const currentPage = page + 1;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = [];
  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 px-6 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-sm text-gray-600">Page </span>
            <span className="font-semibold text-green-600">{currentPage}</span>
            <span className="text-sm text-gray-600"> of </span>
            <span className="font-semibold text-green-600">{totalPages}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button
            className="group p-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
          {pages.map((pageNumber, index) => (
            pageNumber === '...' ? (
              <span key={`dots-${index}`} className="px-2 py-2 text-gray-500 text-sm">
                ...
              </span>
            ) : (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber - 1)}
                className={`min-w-[36px] h-9 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pageNumber === currentPage
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-300 hover:text-green-600 shadow-sm hover:shadow-md'
                }`}
              >
                {pageNumber}
              </button>
            )
          ))}
          <button
            className="group p-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settlementData = {
    totalCollection: 1023,
    alreadySettled: 100,
    merchantName: "IBRAHIM MOHAMMEDALI",
    merchantId: "09214261127",
    settlementDate: "09 Aug 2024",
    finalAmount: 1023
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5000/api/transactions?page=${page}`);
        const result = await response.json();
        if (result?.status) {
          setTransactions(result.data);
          setTotalPages(result.totalPages || 1);
        } else {
          setError(result?.msg || "Failed to fetch transactions");
        }
      } catch (err) {
        setError("Server error: " + err.message);
      }
      setLoading(false);
    };
    fetchTransactions();
  }, [page]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value) {
      const filtered = transactions.filter(item =>
        item?.name?.toLowerCase().includes(value.toLowerCase()) ||
        item?.account?.toLowerCase().includes(value.toLowerCase()) ||
        item?.status?.toLowerCase().includes(value.toLowerCase()) ||
        item?.amount?.toString().includes(value)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(transactions);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredData(transactions);
  };

  if (loading) return (
    <div className="p-6 text-center text-gray-600 animate-pulse">Loading transactions...</div>
  );
  if (error) return (
    <div className="p-6 text-center text-red-600">{error}</div>
  );
  if (transactions.length === 0) return (
    <div className="p-6 text-center text-gray-600">No transactions found.</div>
  );

  const dataToRender = filteredData.length > 0 ? filteredData : transactions;

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Settlement History</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#42794A] rounded-lg text-[#42794A] hover:text-white hover:bg-[#42794A] bg-gray-50 hover:border-[#42794A]">
            <Download size={16} /> Download statement
          </button>
        </div>
        {/* Search and Filter */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 w-full">
            <SearchFilter
              placeholder="Search"
              value={searchTerm}
              onNameSelect={handleSearch}
              onClearSearch={handleClearSearch}
              onChange={(value) => !value && handleClearSearch()}
              rounded="lg"
              additionalClassName="!h-10 !w-full !ring-1 !ring-gray-300 focus-within:!ring-2 focus-within:!ring-green-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
            <Filter size={18} />
          </button>
        </div>
        {/* Auto-settle Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="text-green-600 hidden lg:flex " size={20} />
            <span className="text-sm text-gray-700">
              Today's total collection will be auto-settled by <strong>08:00AM, Tomorrow</strong>.
            </span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border text-white bg-green-600 hover:border-[#42794A] hover:bg-green-700 flex-shrink-0"
          >
            <BsStopwatch size={20} /> Settle Now!
          </button>
        </div>

        {/* Mobile Cards (hidden on desktop) */}
        <div className="sm:hidden">
          {dataToRender.map((txn) => (
            <TransactionCard key={txn.transaction_id} txn={txn} />
          ))}
          <MobilePagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>

        {/* Desktop Table (hidden on mobile) */}
        <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <span>Transaction ID</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <span>Amount</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <span>Wallet</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <span>Status</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <span>Date & Time</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dataToRender.map((txn) => (
                  <tr key={txn.transaction_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="font-mono text-sm">{txn.transaction_id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600 font-semibold">₹</span>
                        <span className="font-semibold text-green-600">{txn.amount.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">{getAccountIcon(txn.wallet?.name)}</div>
                        <div>
                          <div className="font-medium text-gray-800">{txn.wallet?.name}</div>
                          <div className="text-xs text-gray-500">Digital Wallet</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        txn.status === 'completed' || txn.status === 'success'
                          ? 'bg-green-100 text-green-800'
                          : txn.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : txn.status === 'failed' || txn.status === 'error'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          txn.status === 'completed' || txn.status === 'success'
                            ? 'bg-green-500'
                            : txn.status === 'pending'
                            ? 'bg-yellow-500'
                            : txn.status === 'failed' || txn.status === 'error'
                            ? 'bg-red-500'
                            : 'bg-gray-500'
                        }`} />
                        {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div>
                        <div className="font-medium text-gray-900">
                          {new Date(txn.created_date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(txn.created_date).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DesktopPagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
        {/* Settlement Modal */}
        <SettlementModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          settlementData={settlementData}
        />
      </div>
    </div>
  );
};

export default History;
