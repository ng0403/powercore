package com.crm.cp.utils;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Calendar;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service("ProdfileManager")
public class ProdFileManager {

	// pathname : ������ ������ ���
	// ���� : ������ ����� ���ο� ���ϸ�
	public String doFileUpload(MultipartFile partFile, String pathname) throws Exception {
		String saveFilename = null;

		if(partFile == null || partFile.isEmpty())
			return null;
		
		// Ŭ���̾�Ʈ�� ���ε��� ������ �̸�
		String originalFilename=partFile.getOriginalFilename();
		if(originalFilename==null||originalFilename.length()==0)
			return null;
		
		// Ȯ����
		String fileExt = originalFilename.substring(originalFilename.lastIndexOf("."));
		if(fileExt == null || fileExt.equals(""))
			return null;
		
		// ������ ������ ���ο� ���ϸ��� �����.
		saveFilename = String.format("%1$tY%1$tm%1$td%1$tH%1$tM%1$tS", 
				         Calendar.getInstance());
		saveFilename += System.nanoTime();
		saveFilename += fileExt;
		
		String fullpathname = pathname + File.separator + saveFilename;
		// ���ε��� ��ΰ� �������� �ʴ� ��� ������ ���� �Ѵ�.
		File f = new File(fullpathname);
		if(!f.getParentFile().exists())
			f.getParentFile().mkdirs();

		partFile.transferTo(f);

		return saveFilename;
	}

	public String doFileUpload(byte[] bytes, String originalFilename, String pathname) throws Exception {
		String saveFilename = null;

		if(bytes == null)
			return null;
		
		// Ŭ���̾�Ʈ�� ���ε��� ������ �̸�
		if(originalFilename==null||originalFilename.length()==0)
			return null;
		
		// Ȯ����
		String fileExt = originalFilename.substring(originalFilename.lastIndexOf("."));
		if(fileExt == null || fileExt.equals(""))
			return null;
		
		// ������ ������ ���ο� ���ϸ��� �����.
		saveFilename = String.format("%1$tY%1$tm%1$td%1$tH%1$tM%1$tS", 
				         Calendar.getInstance());
		saveFilename += System.nanoTime();
		saveFilename += fileExt;
		
		// ���ε��� ��ΰ� �������� �ʴ� ��� ������ ���� �Ѵ�.
		File dir = new File(pathname);
		if(!dir.exists())
			dir.mkdirs();
		
		String fullpathname = pathname + File.separator + saveFilename;
		
		FileOutputStream fos = new FileOutputStream(fullpathname);
		fos.write(bytes);
		fos.close();
		
		return saveFilename;
	}

	// ���� �ٿ�ε�
	// saveFilename : ������ ����� ���ϸ�
	// originalFilename : Ŭ���̾�Ʈ�� ���ε��� ���ϸ�
	// pathname : ������ ����� ���
	public boolean doFileDownload(String saveFilename, String originalFilename, String pathname, HttpServletResponse response) {
		String fullpathname = pathname + File.separator + saveFilename;
		
        try {
    		if(originalFilename == null || originalFilename.equals(""))
    			originalFilename = saveFilename;
        	originalFilename = new String(originalFilename.getBytes("euc-kr"),"8859_1");
        } catch (UnsupportedEncodingException e) {
        }

	    try {
	        File file = new File(fullpathname);

	        if (file.exists()){
	            byte readByte[] = new byte[4096];

	            response.setContentType("application/octet-stream");
				response.setHeader(
						"Content-disposition",
						"attachment;filename=" + originalFilename);

	            BufferedInputStream  fin  = new BufferedInputStream(new FileInputStream(file));
	            //javax.servlet.ServletOutputStream outs =	response.getOutputStream();
	            OutputStream outs = response.getOutputStream();
	            
	   			int read;
	    		while ((read = fin.read(readByte, 0, 4096)) != -1)
	    				outs.write(readByte, 0, read);
	    		outs.flush();
	    		outs.close();
	            fin.close();
	            
	            return true;
	        }
	    } catch(Exception e) {
	    }
	    
	    return false;
	}
	
	// ���� ���� ����
	public void doFileDelete(String filename, String pathname) 
	        throws Exception {
		String fullpathname = pathname + File.separator + filename;
		File file = new File(fullpathname);
        if (file.exists())
           file.delete();
	}

	// ���� ����
	public long getFilesize(String pathname) {
		long size=-1;
		
		File file = new File(pathname);
		if (! file.exists())
			return size;
		
		size=file.length();
		
		return size;
	}
	
	// ���� Ÿ��
	public String getFiletype(String pathname) {
		String type="";
		try {
			URL u = new URL("file:"+pathname);
		    URLConnection uc = u.openConnection();
		    type = uc.getContentType();
		} catch (Exception e) {
		}
		
	    return type;
	}
}
