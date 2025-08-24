import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const TransactionCard = ({ txn, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg border border-gray-200 p-4 mb-4 shadow-sm"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-mono text-sm text-gray-500">Transaction ID</div>
          <div className="font-medium text-gray-900">{txn.transaction_id}</div>
        </div>
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 + 0.1 }}
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            txn.status === 'completed' || txn.status === 'success'
              ? 'bg-green-100 text-green-800'
              : txn.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : txn.status === 'failed' || txn.status === 'error'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
              txn.status === 'completed' || txn.status === 'success'
                ? 'bg-green-500'
                : txn.status === 'pending'
                ? 'bg-yellow-500'
                : txn.status === 'failed' || txn.status === 'error'
                ? 'bg-red-500'
                : 'bg-gray-500'
            }`}
          />
          {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
        </motion.span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="font-mono text-sm text-gray-500">Amount</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="flex items-center space-x-1"
          >
            <span className="text-green-600 font-semibold">₹</span>
            <span className="font-semibold text-green-600">{txn.amount.toLocaleString()}</span>
          </motion.div>
        </div>
        <div>
          <div className="font-mono text-sm text-gray-500">Wallet</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            className="flex items-center space-x-2"
          >
            <div className="flex-shrink-0">{getAccountIcon(txn.wallet?.name)}</div>
            <div className="font-medium text-gray-800">{txn.wallet?.name}</div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="font-mono text-sm text-gray-500">Date & Time</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
          className="font-medium text-gray-900"
        >
          {new Date(txn.created_date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </motion.div>
        <div className="text-xs text-gray-500">
          {new Date(txn.created_date).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg border border-gray-200 p-3 mt-4 flex flex-col items-center"
    >
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
        >
          &lt;
        </motion.button>

        {pages.map((pageNumber, index) => (
          pageNumber === '...' ? (
            <span key={`dots-${index}`} className="px-2 py-1 text-gray-500">
              ...
            </span>
          ) : (
            <motion.button
              key={pageNumber}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPage(pageNumber - 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                pageNumber === currentPage
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-50 text-gray-700 border border-gray-200'
              }`}
            >
              {pageNumber}
            </motion.button>
          )
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40"
          disabled={page >= totalPages - 1}
          onClick={() => setPage((p) => p + 1)}
        >
          &gt;
        </motion.button>
      </div>
      <div className="text-xs text-gray-600 mt-2">
        Page {currentPage} of {totalPages}
      </div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 px-6 py-5"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
          >
            <span className="text-sm text-gray-600">Page </span>
            <span className="font-semibold text-green-600">{currentPage}</span>
            <span className="text-sm text-gray-600"> of </span>
            <span className="font-semibold text-green-600">{totalPages}</span>
          </motion.div>
        </div>
        <div className="flex items-center space-x-1">
          <motion.button
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          </motion.button>
          {pages.map((pageNumber, index) => (
            pageNumber === '...' ? (
              <span key={`dots-${index}`} className="px-2 py-2 text-gray-500 text-sm">
                ...
              </span>
            ) : (
              <motion.button
                key={pageNumber}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage(pageNumber - 1)}
                className={`min-w-[36px] h-9 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pageNumber === currentPage
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-300 hover:text-green-600 shadow-sm hover:shadow-md'
                }`}
              >
                {pageNumber}
              </motion.button>
            )
          ))}
          <motion.button
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group p-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </motion.div>
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
    merchantName: "IBRAHIM",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 text-center text-gray-600"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="inline-block w-6 h-6 border-2 border-gray-300 border-t-green-600 rounded-full mr-2"
      />
      Loading transactions...
    </motion.div>
  );

  if (error) return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 text-center text-red-600"
    >
      {error}
    </motion.div>
  );

  if (transactions.length === 0) return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 text-center text-gray-600"
    >
      No transactions found.
    </motion.div>
  );

  const dataToRender = filteredData.length > 0 ? filteredData : transactions;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-2"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold text-gray-900"
          >
            Settlement History
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border border-[#42794A] rounded-lg font-medium text-[#42794A] hover:text-white hover:bg-[#42794A] bg-gray-50 hover:border-[#42794A]"
          >
            <Download size={16} /> Download statement
          </motion.button>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3 mb-4"
        >
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
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 border border-gray-300 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            <Filter size={18} />
          </motion.button>
        </motion.div>

        {/* Auto-settle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock className="text-green-600 hidden lg:flex " size={20} />
            </motion.div>
            <span className="text-sm text-gray-700">
              Today's total collection will be auto-settled by <strong>08:00AM, Tomorrow</strong>.
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex rounded-md font-medium items-center gap-2 px-4 py-2 border text-white bg-green-600 hover:border-[#42794A] hover:bg-green-700 flex-shrink-0"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <BsStopwatch size={20} />
            </motion.div>
            Settle Now!
          </motion.button>
        </motion.div>

        {/* Mobile Cards (hidden on desktop) */}
        <div className="sm:hidden">
          <AnimatePresence mode="wait">
            {dataToRender.map((txn, index) => (
              <TransactionCard key={txn.transaction_id} txn={txn} index={index} />
            ))}
          </AnimatePresence>
          <MobilePagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>

        {/* Desktop Table (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <motion.thead
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="bg-gray-100"
              >
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
              </motion.thead>
              <tbody className="divide-y divide-gray-100">
                <AnimatePresence mode="wait">
                  {dataToRender.map((txn, index) => (
                    <motion.tr
                      key={txn.transaction_id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-3">
                          <div className="font-mono text-sm">{txn.transaction_id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 + 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-green-600 font-semibold">₹</span>
                          <span className="font-semibold text-green-600">{txn.amount.toLocaleString()}</span>
                        </motion.div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0">{getAccountIcon(txn.wallet?.name)}</div>
                          <div>
                            <div className="font-medium text-gray-800">{txn.wallet?.name}</div>
                            <div className="text-xs text-gray-500">Digital Wallet</div>
                          </div>
                        </motion.div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 + 0.3 }}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            txn.status === 'completed' || txn.status === 'success'
                              ? 'bg-green-100 text-green-800'
                              : txn.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : txn.status === 'failed' || txn.status === 'error'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              txn.status === 'completed' || txn.status === 'success'
                                ? 'bg-green-500'
                                : txn.status === 'pending'
                                ? 'bg-yellow-500'
                                : txn.status === 'failed' || txn.status === 'error'
                                ? 'bg-red-500'
                                : 'bg-gray-500'
                            }`}
                          />
                          {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                        </motion.span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 + 0.4 }}
                        >
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
                        </motion.div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          <DesktopPagination page={page} totalPages={totalPages} setPage={setPage} />
        </motion.div>
        
        {/* Settlement Modal */}
        <SettlementModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          settlementData={settlementData}
        />
      </div>
    </motion.div>
  );
};

export default History;